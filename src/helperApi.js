// 4d339d45e4c9d1b0cbf93a0e05fecd5d

import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const api_key = `4d339d45e4c9d1b0cbf93a0e05fecd5d`;

export const fetchAllVideo = async signal => {
  const params = new URLSearchParams({
    api_key: api_key,
  });
  const resp = await axios.get(`trending/all/day`, { signal, params });
  return resp.data;
};

export const fetchSearchMovie = async (query, signal) => {
  const params = new URLSearchParams({
    api_key: api_key,
    language: 'en-US',
    query,
    include_adult: false,
    page: 1,
  });

  const resp = await axios.get('search/movie', { signal, params });
  return resp.data;
};

export const fetchVideoById = async (videoId, signal) => {
  const params = new URLSearchParams({
    api_key: api_key,
    language: 'en-US',
  });
  const resp = await axios.get(`/movie/${videoId}`, { signal, params });
  return resp.data;
};

export const fetchVideoActor = async (videoId, signal) => {
  const params = new URLSearchParams({
    api_key: api_key,
    language: 'en-US',
  });
  const resp = await axios.get(`/movie/${videoId}/credits`, {
    signal,
    params,
  });
  return resp.data;
};

export const fetchVideoReviews = async (videoId, signal) => {
  const params = new URLSearchParams({
    api_key: api_key,
    language: 'en-US',
  });
  const resp = await axios.get(`/movie/${videoId}/reviews`, { signal, params });
  return resp.data;
};
