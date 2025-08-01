const handler = require('../handlers/userHandler');
const { userSchema, userIdParam } = require('../validators/userValidator');
const failAction = require('../utils/failaction');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: handler.getUsers,
    options: {
      tags: ['api'],
      description: 'Get all users',
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handler.getUser,
    options: {
      tags: ['api'],
      description: 'Get user by ID',
      validate: {
        params: userIdParam,
      },
    },
  },
  {
    method: 'POST',
    path: '/users',
    handler: handler.createUser,
    options: {
      tags: ['api'],
      description: 'Create a new user',
      validate: {
        payload: userSchema,
        failAction,
      },
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: handler.updateUser,
    options: {
      tags: ['api'],
      description: 'Update a user by ID',
      validate: {
        params: userIdParam,
        payload: userSchema,
        failAction,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: handler.deleteUser,
    options: {
      tags: ['api'],
      description: 'Delete a user by ID',
      validate: {
        params: userIdParam,
      },
    },
  },
];
