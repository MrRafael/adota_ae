const routes = require('express').Router();

const { User } = require('./app/models');

//rotas aqui

User.create({
    nome: "rafael",
    email: "email@email.com",
    password_hash: "senha",
    estado: "sp",
    cidade: "piracicaba",
    rua: "rua elias fuzaro",
    numero: "200"
});

module.exports = routes;