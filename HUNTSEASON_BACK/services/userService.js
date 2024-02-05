// service.ts

import client from '../database/database.js';

export const getUsers = async () => {
  // Example query
  const result = await client.query('SELECT * FROM user');
  return result;
};

export const addUser = async (userData) => {
  // Example query
  await client.execute('INSERT INTO users (name,number,email,password) VALUES (?, ?, ?, ?)', [
    userData.name,
    userData.number,
    userData.email,
    userData.password,
  ]);
};
