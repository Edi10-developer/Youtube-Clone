import React, { useState } from 'react';
import './App.css';
import callYoutube from './components/APIs/callYoutube';
import { SearchBar, VideoList, VideoDetails } from './components/index'

const  App = () => {
  const [snippet1, setSnippet1] = useState({ videos: [], selectedVideo: null });

  const handleSubmit = async (termsOfsearch) => {
     await callYoutube.get('/search', {
      params: {
        q: termsOfsearch
      }
    })
    .then( response => {
      console.log(response.data)
    setSnippet1({ videos: response.data.items, selectedVideo: response.data.item[0] })//, selectedVideo: response.data.item[0] })
    })
  }

  return(
    <div className="App">
      <h1>React Youtube</h1>
      <h2>App component</h2>
      <SearchBar onClick={handleSubmit} />
      <VideoList videos={snippet1.videos} />
      <VideoDetails video={snippet1.selectedVideo} />
    </div>
  );
}

export default App;
