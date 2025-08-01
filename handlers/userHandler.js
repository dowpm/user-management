const userService = require('../services/userService');

const userNotFound = (id, h) => {
  return h
    .response({
      error: 'User not found',
      message: `The user with the ID ${id} does not exist.`,
    })
    .code(404);
};

const getUsers = (request, h) => {
  return userService.getAllUsers();
};

const getUser = (request, h) => {
  const id = Number(request.params.id);
  const user = userService.getUserById(id);

  if (!user) return userNotFound(id, h);
  return user;
};

const createUser = (request, h) => {
  const newUser = userService.createUser(request.payload);
  if (!newUser)
    return h
      .response({
        error: 'Email already exists',
        message: 'This email already exists',
      })
      .code(400);
  return h.response(newUser).code(201);
};

const updateUser = (request, h) => {
  const id = Number(request.params.id);
  const updated = userService.updateUser(id, request.payload);

  if (!updated) return userNotFound(id, h);
  return updated;
};

const deleteUser = (request, h) => {
  const id = Number(request.params.id);
  const success = userService.deleteUser(id);

  if (!success) return userNotFound(id, h);
  return h.response().code(204);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
