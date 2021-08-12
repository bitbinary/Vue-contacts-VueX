import { getRequest } from './axiosClient';

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    getRequest('users')
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
