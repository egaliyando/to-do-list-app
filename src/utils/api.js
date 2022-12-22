import axios from 'axios';

const API_URL = 'https://todo.api.devcode.gethired.id';

export async function getData(url, params) {
  return await axios.get(`${API_URL}/${url}`, {
    params,
  });
}

export async function postData(url, payload) {
  return await axios.post(`${API_URL}/${url}`, payload);
}

export async function putData(url, payload) {
  return await axios.put(`${API_URL}/${url}`, payload);
}

export async function deleteData(url) {
  return await axios.delete(`${API_URL}/${url}`);
}
