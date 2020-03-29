const express = require ('express');
const routes = require ('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333)

/**
 * Rota/  Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar um informação no back-end
  * DELETE: Deletar uma infomação no back-end
  */



/**
 * Tipo de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na Rota após "?"(Filtros, paginação)
 * Route Params: Parêametros utilizados para identificar recursos
 * Request Body:
 *  
 * */

 
