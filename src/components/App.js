import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {videos: [], selectedVideo: null} //sets the videos as state 
    //Create call back method to be made anytime someone submits the search form.
    componentDidMount() {
      this.onTermSubmit('Teyana Taylor');
    }

    onTermSubmit = async(term) => { //need to pass the state from the search bar into this function
      let response = await youtube.get('/search', {
          params: {
              q: term
          }
      });
      
      this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0] 
        })  //updates the videos array
    };

    onVideoSelect = (video) =>{
      this.setState({selectedVideo: video});
    };
    render() {
        return (
        <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">               
                         <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
            
        </div>

        );
    }
}

export default App;