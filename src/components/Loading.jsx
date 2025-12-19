import { useEffect, useState } from 'react'
import './Loading.css'

const Loading = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(onLoadingComplete, 500) // Wait a bit after 100%
                    return 100
                }
                return prev + 1
            })
        }, 20) // 2 seconds total roughly

        return () => clearInterval(interval)
    }, [onLoadingComplete])

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo">YC</div>
                <div className="loading-bar-container">
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="loading-text">Initializing AI Systems... {progress}%</div>
            </div>
        </div>
    )
}

export default Loading
