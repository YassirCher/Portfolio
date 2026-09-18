const modelFamilies = [
    { name: 'DeepSeek', logo: '/projects/qasper/brands/deepseek.svg', className: 'deepseek' },
    { name: 'Qwen', logo: '/projects/qasper/brands/qwen.svg', className: 'qwen' },
    { name: 'Mistral', logo: '/projects/qasper/brands/mistral.svg', className: 'mistral' },
    { name: 'Llama', logo: '/projects/qasper/brands/llama.png', className: 'llama' },
    { name: 'Microsoft Phi', logo: '/projects/qasper/brands/microsoft.svg', className: 'phi' }
]

const ProjectBrandCovers = ({ kind }) => {
    if (kind === 'qasper') {
        return (
            <div className="project-brand-cover qasper-brand-cover" role="img" aria-label="DeepSeek, Qwen, Mistral, Meta Llama, and Microsoft Phi logos">
                <span className="brand-cover-eyebrow">13 open models on QASPER</span>
                <div className="model-brand-grid">
                    {modelFamilies.map((brand) => (
                        <div className={`model-brand ${brand.className}`} key={brand.name}>
                            <img src={brand.logo} alt="" loading="lazy" />
                            {brand.className !== 'llama' && <strong>{brand.name}</strong>}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (kind === 'biomedical') {
        return (
            <div className="project-brand-cover biomedical-brand-cover" role="img" aria-label="QLoRA fine-tuning method compared with Unsloth, shown with Unsloth's official logo">
                <span className="brand-cover-eyebrow">Biomedical fine-tuning benchmark</span>
                <div className="biomedical-brand-comparison">
                    <div className="qlora-method-mark">
                        <strong>QLoRA</strong>
                        <span>4-bit adapter tuning</span>
                    </div>
                    <span className="biomedical-versus">vs</span>
                    <div className="unsloth-brand-mark">
                        <img src="/projects/biomedical/unsloth-official.png" alt="" loading="lazy" />
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default ProjectBrandCovers
