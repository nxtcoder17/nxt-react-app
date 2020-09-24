const assert = require('assert');

['NODE_ENV', 'SERVER_URL', 'PORT'].forEach((item) => {
  assert(item in process.env, `${item} is not present in process.env`);
});

module.exports = {
  SERVER_URL: process.env.SERVER_URL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
