require('dotenv').config();

module.exports = function () {
  return JSON.stringify({
    backendUrl: process.env.BACKEND_URL || 'http://localhost:4000',
    jwtPrefix: 'JWT',
    urls: {
      login: '/api/users/login',
      me: '/api/users/me',
      todos: '/api/todos'
    },
    features: {
      mail: true
    }
  });
};
