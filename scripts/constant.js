const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

// 是否是开发环境
const isDev = process.env.NODE_ENV !== 'production';

// host
const SERVER_HOST = '127.0.0.1';

// 端口号
const SERVER_PORT = 9000;

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT,
};
