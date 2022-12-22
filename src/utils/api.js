import axios from 'axios';

const API_URL = 'https://getswing.cloud';
const API_VERSION = 'api/v1/client';
const API_PUBLIC_VERSION = 'api/v1/public';
const API_KEY = 'api/v1/public';

export async function postData(url, payload) {
  if (url !== '/auth/sign-in') {
    let token = localStorage.getItem('token');

    if (!token) return;
    return await axios.post(`${API_URL}/${API_VERSION}/${url}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } else if (url === 'upload/galleries' || url === 'upload/cover') {
    let { token } = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {};
    if (!token) return;
    return await axios.post(`${API_URL}/${API_VERSION}/${url}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return await axios.post(`${API_URL}/${API_VERSION}${url}`, payload);
  }
}

export async function getData(url, params) {
  let token = localStorage.getItem('token');

  if (!token) return;

  return await axios.get(`${API_URL}/${API_VERSION}/${url}`, {
    params,
    headers: { Authorization: `Bearer ${token}` },
  });
}
export async function getPublicData(url, params) {
  return await axios.get(`${API_URL}/${API_PUBLIC_VERSION}/${url}`, {
    params,
    headers: { 'X-API-KEY': API_KEY },
  });
}

export async function putData(url, payload) {
  let token = localStorage.getItem('token');

  if (!token) return;

  return await axios.put(`${API_URL}/${API_VERSION}/${url}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
export async function deleteData(url) {
  let token = localStorage.getItem('token');

  if (!token) return;

  return await axios.delete(`${API_URL}/${API_VERSION}/${url}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
