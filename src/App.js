import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
//import callYoutube from './components/APIs/callYoutube';
import { SearchBar, VideoList, VideoDetails, SideMenu } from './components/index';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Chronology from './components/pages/Chronology';
import Homepage from './components/pages/Homepage';
import LikedVideos from './components/pages/LikedVideos'

const App = () => {
  const [snippet1, setSnippet1] = useState({ videos: [], selectedVideo: null });
  const [termsOfSearch, setTermsOfSearch] = useState('');

  const handleSubmit = async () => {
    const PRIVATE_API_KEY = 'AIzaSyAyrpbJRQ9C6LgkCwCkgzG1welKjI1UlhI';
    /* await callYoutube.get('/search', {
       params: {
         q: termsOfsearch
       }
     })
     .then(data => {console.log(data)
     .catch(err => { console.log(err)})
     */
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${termsOfSearch}&key=${PRIVATE_API_KEY}`)
    setSnippet1({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  const handleChange = event => {
    setTermsOfSearch(event.target.value);
    console.log(termsOfSearch.toString()

    )
  };

  //const handleVideoSelect = () => { selectedVideo =>  setSnippet1({ selectedVideo })}


  return (
    <div className="App">
      <h1>React Youtube</h1>
      <h2>App component</h2>
      <SearchBar value={termsOfSearch} onChange={handleChange} onClick={handleSubmit} />
      <div>
      <Router>
          <Route exact path="/" component={Homepage} />
          <Route path="/chronology" component={Chronology} />
          <Route path="/liked-videos" component={LikedVideos} />
      </Router>
      </div>

      <SideMenu />
      <div className="content">
        <VideoList videos={snippet1.videos} handleVideoSelect={selectedVideo => setSnippet1({ selectedVideo })} />
        <VideoDetails video={snippet1.selectedVideo} />
      </div>
    
    </div>
  );
}

export default App;
