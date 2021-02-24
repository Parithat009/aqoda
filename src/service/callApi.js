import axios from 'axios'

export const callApi = () => {
  return axios.create({
    baseURL: 'http://localhost:4000/api',
    headers:{
      'authorization':`Bearer ${localStorage.getItem('token')}`
    }
  })
}
