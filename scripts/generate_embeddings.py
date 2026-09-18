"""Generate the portfolio chatbot's local TF-IDF embedding index.

This script needs only Python's standard library and makes no network requests.
"""

import json
import math
import re
import unicodedata
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
SOURCES = (DATA / "portfolio-knowledge-base.md", DATA / "cv-content.md")
OUTPUT = DATA / "knowledge_base_embeddings.json"
STOP_WORDS = {
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he", "his",
    "in", "into", "is", "it", "of", "on", "or", "our", "the", "their", "this", "to",
    "was", "were", "with", "you", "your", "de", "des", "du", "et", "la", "le", "les",
}


def tokenize(text: str) -> list[str]:
    normalized = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii").lower()
    return [term for term in re.findall(r"[a-z0-9]{2,}", normalized) if term not in STOP_WORDS]


def source_chunks() -> list[str]:
    chunks = []
    for source in SOURCES:
        heading = ""
        for block in source.read_text(encoding="utf-8").split("\n\n"):
            block = block.strip()
            if not block or block == "---":
                continue
            lines = block.splitlines()
            if re.fullmatch(r"#{1,6} .+", lines[0]):
                heading = lines[0]
                block = "\n".join(lines[1:]).strip()
                if not block:
                    continue
            chunks.append(f"{heading}\n{block}".strip())
    return list(dict.fromkeys(chunks))


def build_index() -> None:
    chunks = source_chunks()
    token_counts = [Counter(tokenize(chunk)) for chunk in chunks]
    document_frequency = Counter(term for counts in token_counts for term in counts)
    idf = {
        term: math.log((len(chunks) + 1) / (frequency + 1)) + 1
        for term, frequency in document_frequency.items()
    }

    documents = []
    for chunk, counts in zip(chunks, token_counts):
        weights = {term: (1 + math.log(count)) * idf[term] for term, count in counts.items()}
        magnitude = math.sqrt(sum(weight * weight for weight in weights.values())) or 1
        documents.append({
            "text": chunk,
            "embedding": {term: round(weight / magnitude, 6) for term, weight in weights.items()},
        })

    index = {
        "model": "local-tfidf-v1",
        "idf": {term: round(weight, 6) for term, weight in idf.items()},
        "chunks": documents,
    }
    temp_output = OUTPUT.with_suffix(".json.tmp")
    temp_output.write_text(json.dumps(index, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    temp_output.replace(OUTPUT)
    print(f"Generated {len(documents)} local embeddings in {OUTPUT}")


if __name__ == "__main__":
    build_index()
