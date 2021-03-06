require("dotenv").config({
  path: toString(process.env.NODE_ENV).trim() == "test" ? ".env.test" : ".env"
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  storage: './__tests__/database.sqlite',
  operatorAliases: false,
  loggin: false,
  timestamps: false
} 