const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

/*  MÉTODOS HTTP
    GET => Pegando Informação
    POST => Criar Informção
    PUT => Editar Informção
    DELETE => Deletar Informção
*/

/** Tipos de parâmetros
    Query Params: request.query (Filtros, ordenação, paginação,...) 
    Route Params: request.parms (Indentificar um recurso na alteração ou remoção)
    Body: request.body (Dados para criação ou alteração de um registro) 
*/


routes.get('/devs', DevController.index); //Endereço Listar de Devs
routes.post('/devs', DevController.store); //Endereço Cadastro de Devs
routes.get('/search', SearchController.index) //Buscar no App


module.exports = routes;