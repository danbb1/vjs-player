import React, { useRef, useEffect, useState } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import './videojs.css'

const useVideoPlayer = ({ source }) => {
    const [player, setPlayer] = useState(null)
    const videoPlayerRef = useRef(null)

    const videoJSOptions = {
        fill: true,
        preload: 'auto',
        autoplay: false,
        fluid: true,
        controls: true,
    }

    useEffect(() => {
        const videojsplayer = videojs(videoPlayerRef.current, {...videoJSOptions,
            sources: [source]
        })
        setPlayer(videojsplayer)

        return () => {
            if(player !== null) {
                player.dispose()
                console.log('player disposed')
            }
        }
    })

    return videoPlayerRef
}

const VideoJSPlayer = ({ source }) => {
    const playerRef = useVideoPlayer({ source })

    return (
        <div style={{ maxWidth: 800, minWidth: 250, margin: `0 auto` }}>
            <div data-vjs-player>
                <video ref={playerRef} className="video-js" />
            </div>
        </div>
        
    )
}

export default VideoJSPlayer
