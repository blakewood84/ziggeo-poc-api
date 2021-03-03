import React from 'react';
import axios from 'axios';
import Page, { GridColumn, Grid } from '@atlaskit/page';
import { ZiggeoPlayer } from 'react-ziggeo';

const API_KEY = 'a293c346773385bae50fb960f2210d2d';

const VideoPlayer = ({ video_token, api_key }) => {
    return (
        <div className="video-player">
            <ZiggeoPlayer
                apiKey={ api_key }
                video={ video_token }
                height={ 300 }
                width={ 400 }
            />
        </div>
    )
}

export default class ViewVideos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            video_position: '',
            video_list: [],
            video: {},
            video_token: '',
            selected: false,
        }
    }

    // Retrieve Videos from Ziggeo API using Express Backend
    async getData() {
        axios.get('http://localhost:3001/video-list').then(response => this.setState({ video_list: response.data }));
        
    }

    componentDidMount() {
        this.getData();
    }
    
    videoSelectionHandler(video, video_position ,event){
        this.setState({ selected: false}, () => this.setState({ 
            video: video,
            video_position: video_position,
            selected: true,
            video_token: video.token,
        }))
    }

    render(){

        return (
             <div className="container-fluid">

                {/* SideBar */}
                 <div className="row" style={{ width: '100%', height: '100%' }}>
                 <div className="col-md-2 p-1" style={{ borderRight: '1px solid black' }}>
                        <h5 className="mb-4 mt-2" style={{textAlign: 'center'}}>Video List</h5>
                        {
                            this.state.video_list.map( (video, index) => {
                                let isActive = this.state.video_position === index ? 'active' : ''
                                return <div key={ index } className={"video-list p-2 " + isActive} onClick={ this.videoSelectionHandler.bind(this, video, index)} style={{borderBottom: '1px solid grey' }}>Video by { video.tags[0] }</div>
                            })
                        }
                    </div>

                    {/* Main Content */}
                    <div className="col-md-10">
                        <div className="col-12 mt-4 d-flex justify-content-center">
                            <h3>Video Player</h3>
                        </div>
                        <div className="col-12 mt-4 d-flex justify-content-center">
                            {
                                this.state.selected ? <VideoPlayer api_key={API_KEY} video_token={ this.state.video_token } /> : 'Select a video'
                            }
                        </div>
                    </div>
                </div>

             </div>
        )
    }
}