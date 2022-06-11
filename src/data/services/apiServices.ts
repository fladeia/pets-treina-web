import axios from 'axios'

export const ApiService = axios.create({
  baseUrl: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  }
})
