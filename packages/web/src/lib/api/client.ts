import axios from 'axios'

const client = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api' : '',
})

export default client
