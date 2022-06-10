import axios from 'axios'

export const ApiSevice = axios.create({
  baseUrl: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})
