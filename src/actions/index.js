import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST'

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const fetchSinglePost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}`)
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  }
}
