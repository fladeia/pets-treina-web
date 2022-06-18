
// @ts-nocheck
import axios from 'axios'

export const ApiService = axios.create({
  baseUrl: "https://pets-backend-ladeia.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json"
  }
})
