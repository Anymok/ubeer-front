import axios from 'axios';


const publicAPI = axios.create({
    baseURL: "https://ubeer.arthur-heude.dev/api/public",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 10000
  });
  


export default publicAPI;