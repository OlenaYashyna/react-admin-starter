import ApiCreator from './api';

const api = ApiCreator('localhost:3000');

export const getUsers = () => api.get('users');

export const setUsers = user => api.post('users', {
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const addUser = user => api.post('users', {
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


export default { getUsers };
