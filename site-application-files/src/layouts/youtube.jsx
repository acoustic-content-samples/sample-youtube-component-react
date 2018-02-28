/*
Copyright IBM Corporation 2017.
LICENSE: Apache License, Version 2.0
*/
import React from 'react';
import {loadContent, getContent, subscribe} from 'wch-flux-sdk/index';
import {default as YouTubePlayer } from 'react-youtube';
import 'styles/layouts/youtube.scss';

export class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentData: {}
        };

        this.sub = subscribe('content', () => {
            let content = getContent(this.props.contentId);
            if (content) {
                this.setState({
                    contentData: content
                });
            }
        });
    }

    componentWillMount() {
        let content = getContent(this.props.contentId);
        if (content) {
            this.setState({
                contentData: content
            });
        } else {
            loadContent(this.props.contentId);
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.contentId !== this.props.contentId) {
            let content = getContent(nextProps.contentId);
            if (content) {
                this.setState({contentData: content});
            } else {
                loadContent(nextProps.contentId);
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        let currentModified = new Date(this.state.contentData.lastModified);
        let newModified = new Date(nextState.contentData.lastModified);

        return (currentModified.getTime() !== newModified.getTime());
    }

    componentWillUnmount() {
        this.sub.unsubscribe();
    }

    _onReady(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    _onPlay(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    _onPause(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    _onEnd(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    _onError(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    _onStateChange(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    _onPlaybackRateChange(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    _onPlaybackQualityChange(event) {
        // Implement custom functionality
        // https://developers.google.com/youtube/iframe_api_reference#Events
    }

    render() {
        let videoID = '';
        let showYoutubeLogo = 1;

        if(this.state.contentData.elements){
            videoID = this.state.contentData.elements.videoid.value;
            showYoutubeLogo = this.state.contentData.elements.showyoutubelogo.value ? 0 : 1;
        }

        let opts = {
            width: 720,
            height: 405,
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                modestbranding: showYoutubeLogo
            }
        };

        return (
            <div id={this.state.contentData.id} className="ytcomponent">
                <h3>Youtube Sample Video - IBM Watson Content Hub Demo Video</h3>
                <div className="video-container">
                    <YouTubePlayer
                        className="ytplayer"
                        videoId={videoID}
                        opts={opts}
                        onReady={this._onReady}
                        onPlay={this._onPlay}
                        onPause={this._onPause}
                        onEnd={this._onEnd}
                        onError={this._onError}
                        onStateChange={this._onStateChange}
                        onPlaybackRateChange={this._onPlaybackRateChange}
                        onPlaybackQualityChange={this._onPlaybackQualityChange}
                    />
                </div>
            </div>
        );
    }
}