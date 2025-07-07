import axios from 'axios';

const API_BASE = 'http://20.244.56.144/evaluation-service';

export const register = async (data: {
  email: string;
  name: string;
  mobileNo: string;
  githubUsername: string;
  rollNo: string;
  accessCode: string;
}) => {
  return axios.post(`${API_BASE}/register`, data);
};

export const authenticate = async (data: {
  email: string;
  name: string;
  rollNo: string;
  accessCode: string;
  clientID: string;
  clientSecret: string;
}) => {
  return axios.post(`${API_BASE}/auth`, data);
};