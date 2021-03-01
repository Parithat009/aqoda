import axios from 'axios'

export const callApi = () => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{
      'authorization':`Bearer ${localStorage.getItem('token')}`
    }
  })
}
