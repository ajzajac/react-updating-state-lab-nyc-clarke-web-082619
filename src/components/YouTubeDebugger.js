// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
        }   
    }

    handleResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }
    handleBitrateClick = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            }
        })
    }
    render(){
        return(
            <div>
            <button className="resolution" onClick={this.handleResClick}>resolution</button>
            <button className="bitrate" onClick={this.handleBitrateClick}>bitrate</button>
            </div>
        )
    }
}