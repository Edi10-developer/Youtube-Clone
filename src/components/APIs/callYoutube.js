import axios from 'axios';
const PRIVATE_API_KEY = 'AIzaSyAiP87H9sTZb_TvwCVRReZ0geYKCx_Zk9U';

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: PRIVATE_API_KEY
    }

})