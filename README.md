# Yassir Chergui Portfolio

React and Vite source for Yassir's public portfolio.

## Local development

```powershell
npm.cmd install
npm.cmd run dev -- --configLoader native
```

On Windows environments where Vite's default config bundler cannot read its temporary files, `--configLoader native` also works for production builds:

```powershell
npm.cmd run lint
npm.cmd run build -- --configLoader native
```

## Updating the portfolio assistant

The assistant's factual source files are `src/data/portfolio-knowledge-base.md` and `src/data/cv-content.md`. After editing either file, rebuild the local search index:

```powershell
python scripts/generate_embeddings.py
```

The index uses local TF-IDF embeddings and does not contact an external service. It is loaded only when a visitor asks the assistant a question. Chat responses still use the site's existing configured AI provider.

## Media

`public/Yassir_Chergui_CV_FR.pdf` is the active CV download. `public/image.jpg` is the original portrait, cropped in the hero by CSS. `public/thinkgraph/hero.mp4` and its poster are the ThinkGraph AI introduction.
