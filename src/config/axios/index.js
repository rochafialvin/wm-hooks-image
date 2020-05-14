import axios from 'axios'

export default axios.create(
   { 
      baseURL : 'https://api.unsplash.com',
      headers: { Authorization : 'Client-ID 143a35f2448b429883319427b9688d3eb4b52eba17114070614730bae919e380' }
   }
)