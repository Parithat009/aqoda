import { callApi } from './callApi'

export const getUsersService = async () => {
  try {
    const response = await callApi().get(`/users`).catch(err => err.response)
    console.log(response)
  } catch (error) {
    console.log('service error', error)
  }
}

export const getUserByIdService = async (id) => {
  try {
    const response = await callApi().get(`/users/${id}`).catch(err => err.response)
    return response?.data
  } catch (error) {
    console.log('service error', error)
  }
}

export const createUserService = async (param) => {
  try {
    const response = await callApi().post(`/user`, param).catch(err => err.response)
    console.log(response);
  } catch (error) {
    console.log('service error', error)
  }
}