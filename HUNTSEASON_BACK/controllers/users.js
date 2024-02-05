// router.js or controllers.js

import { getUsers, addUser } from '../services/userService.js';

// Example controller
export const getUsersController = async (ctx) => {
  const users = await getUsers();
  ctx.response.body = users;
};

// Example controller
export const addUserController = async (ctx) => {
  const userData = await ctx.request.body().value;
  await addUser(userData);
  ctx.response.body = 'User added successfully';
};

