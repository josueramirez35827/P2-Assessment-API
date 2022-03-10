import axios from 'axios';

export async function dogApi() {
  const response = await axios.get('https://dog.ceo/api/breeds/list/all')
  return response
}

export async function catApi() {
  const response = await axios.get('https://api.thecatapi.com/v1/images/search')
  return response
}
