module.exports = (sequelize, type) => sequelize.define('User', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: type.STRING,
  email: {
    type: type.STRING,
    unique: true,
  },
  mobile: {
    type: type.BIGINT,
    unique: true,
  },
  password: type.STRING,
  isCustomer: type.BOOLEAN,
  isPartner: type.BOOLEAN,
  isAdmin: type.BOOLEAN,
});
