import axios from 'axios'
import { ITEM } from './types'

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

export const request = () => {
  const request = axios.get(`${ROOT_URL}/posts`)

  return {
    type: ITEM.GET,
    payload: request,
  }
}

export const requestOne = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}`)

  return {
    type: ITEM.GET_ONE,
    payload: request,
  }
}

export const save = (id, saveData) => {
  const request = axios.post(`${ROOT_URL}/posts/${id}`, { saveData })

  return {
    type: ITEM.SAVE,
    payload: request,
  }
}

export const replace = (id, replaceData) => {
  const request = axios.put(`${ROOT_URL}/posts/${id}`, { replaceData })

  return {
    type: ITEM.PUT,
    payload: request,
  }
}

export const update = (id, updateData) => {
  const request = axios.patch(`${ROOT_URL}/posts/${id}`, { updateData })

  return {
    type: ITEM.PATCH,
    payload: request,
  }
}

export const deleteOne = id => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}`)

  return {
    type: ITEM.DELETE,
    payload: request,
  }
}
