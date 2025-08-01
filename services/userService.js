const users = require('../data/users');

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((u) => u.id === id);
}

function createUser(data) {
  const newUser = { id: Date.now(), ...data };
  users.push(newUser);
  return newUser;
}

function updateUser(id, data) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
}

function deleteUser(id) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
