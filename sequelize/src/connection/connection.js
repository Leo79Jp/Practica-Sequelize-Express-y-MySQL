


const { Sequelize } = require("sequelize");

process.loadEnvFile();

const { DATABASE, DBUSER, DBPASSWORD, DBHOST } = process.env;

const sequelize = new Sequelize(DATABASE, DBUSER, DBPASSWORD, {
  host: DBHOST,
  dialect: "mysql"
});

module.exports = sequelize; 