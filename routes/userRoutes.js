const users = require('../data/users');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: (request, h) => {
      return users;
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: (request, h) => {
      const id = Number(request.params.id);
      const user = users.find((u) => u.id === id);
      if (!user)
        return h
          .response({
            statusCode: '404',
            error: 'User not found',
            message: `The user with the ID ${id} does not exist.`,
          })
          .code(404);
      return user;
    },
  },
  {
    method: 'POST',
    path: '/users',
    handler: (request, h) => {
      const newUser = { id: Date.now(), ...request.payload };
      users.push(newUser);
      return newUser;
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: (request, h) => {
      const id = Number(request.params.id);
      const index = users.findIndex((u) => u.id === id);
      if (index === -1)
        return h
          .response({
            statusCode: '404',
            error: 'User not found',
            message: `The user with the ID ${id} does not exist.`,
          })
          .code(404);
      users[index] = { ...users[index], ...request.payload };
      return users[index];
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: (request, h) => {
      const id = Number(request.params.id);
      const index = users.findIndex((u) => u.id === id);

      if (index === -1)
        return h
          .response({
            statusCode: '404',
            error: 'User not found',
            message: `The user with the ID "${id}" does not exist.`,
          })
          .code(404);
      users.splice(index, 1);
      return true;
    },
  },
];
