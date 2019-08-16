import axios from 'axios';


const KEY = 'AIzaSyAMac-DN0DReztKDKeJu2ZDvNjtz2BIqUg';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

