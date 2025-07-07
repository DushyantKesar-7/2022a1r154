import axios from 'axios';

const LOG_API = 'http://20.244.56.144/evaluation-service/logs';

type Stack = 'backend' | 'frontend';
type Level = 'debug' | 'info' | 'warn' | 'error' | 'fatal';
type Package = 'cache' | 'controller' | /* ...all other allowed packages */;

let authToken = '';

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const Log = async (
  stack: Stack,
  level: Level,
  pkg: Package,
  message: string
) => {
  try {
    await axios.post(LOG_API, {
      stack,
      level,
      package: pkg,
      message
    }, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  } catch (error) {
    console.error('Logging failed:', error);
  }
};