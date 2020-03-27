const express = require ('express');

const app = express();

app.use(express.json());

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
app.post('/users',(request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11',
        Aluno: 'Samuel Augusto'        
    });
}); 

app.listen(3333)
/**
 * Tipo de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na Rota após "?"(Filtros, paginação)
 * Route Params: Parêametros utilizados para identificar recursos
 * Request Body:
 *  
 * */

 
