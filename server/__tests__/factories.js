const { factory } = require('factory-girl');
const faker = require('faker');
const { User, Pet } = require('../src/app/models');

factory.define("User", User, {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    estado: faker.address.state(),
    cidade: faker.address.city(),
    rua: faker.address.streetName(),
    numero: faker.address.stateAbbr()
})

factory.define("Pet", Pet, {
    nome: faker.name.firstName(),
    idade: faker.random.number(),
    peso: faker.random.number()
})

module.exports = factory;