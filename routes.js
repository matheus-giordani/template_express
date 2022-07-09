const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require('./src/controllers/contatoController')

// Rotas para a home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas para contatos
route.get('/contatos', contatoController.paginaInicial)
module.exports = route;
