import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import callYoutube from './components/APIs/callYoutube';

const  App = () => {
  const [snippet1, setSnippet1] = useState({ videos: [], selectedVideo: null });

   handleSubmit = async (termsOfsearch) => {
    const response = await callYoutube.get('/search', {
      params: {
        q: termsOfsearch
      }
    })
    setSnippet1({ videos: response.data.items, selectedVideo: response.data.item[0] })//, selectedVideo: response.data.item[0] })
  }

  return(
    <div className="App">
      <h1>React Youtube</h1>
      <h2>App component</h2>
    </div>
  );
}

export default App;
