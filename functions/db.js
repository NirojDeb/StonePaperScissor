const Sequelize = require('sequelize');
const UserModel = require('./models/user');

// const {
//   SQL_DB_USER,
//   SQL_DB_PASSWORD,
//   SQL_DB_DB,
//   SQL_DB_HOST,
//   SQL_DB_PORT,
//   NODE_ENV,
// } = process.env;

// const isProd = NODE_ENV === 'production';

const SQL_DB_USER = 'sps_admin';
const SQL_DB_PASSWORD = 'Rock093Flash45';
const SQL_DB_DB = 'sps_aws_db';
const SQL_DB_HOST = 'sps-aws-db-instance.cybfd5iq7lig.ap-south-1.rds.amazonaws.com';
const SQL_DB_PORT = 3306;

const sequelize = new Sequelize(
  SQL_DB_DB,
  SQL_DB_USER,
  SQL_DB_PASSWORD,
  {
    dialect: 'mysql',
    host: SQL_DB_HOST,
    port: SQL_DB_PORT,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      handleDisconnects: true,
    },
    dialectOptions: {
      requestTimeout: 100000,
    },
    define: {
      freezeTableName: true,
    },
  },
);
const User = UserModel(sequelize, Sequelize);
const Models = { User };
const connection = {};

module.exports = async () => {
  console.log('db: ', SQL_DB_HOST);
  if (connection.isConnected) {
    console.log('=> Using existing connection.');
    return Models;
  }
  await sequelize.sync();
  await sequelize.authenticate();
  connection.isConnected = true;
  console.log('=> Created a new connection.');
  return Models;
};

// connection.sequelize = sequelize;
// connection.Sequelize = sequelize;
// module.exports = connection;
