const handler = require('../handlers/userHandler');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: handler.getUsers,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handler.getUser,
  },
  {
    method: 'POST',
    path: '/users',
    handler: handler.createUser,
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: handler.updateUser,
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: handler.deleteUser,
  },
];
