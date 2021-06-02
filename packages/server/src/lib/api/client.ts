import axios from 'axios'

const client = axios.create({
  //TODO: add production url
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api' : '',
  withCredentials: true,
})

export default client
