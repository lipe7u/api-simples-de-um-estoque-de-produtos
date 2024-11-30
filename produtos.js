// Exporta uma função que recebe o objeto app
export default function(app) {

    // Define uma rota GET para buscar todos os produtos
    app.get("/produtos", function(req, res) {
        // Executa uma consulta no banco de dados para selecionar todos os produtos
        app.mysql.query(
            "SELECT id, nome, preco FROM produtos", // SQL que seleciona id, nome e preco de todos os produtos
            function onResult(error, result) { // Função de callback que trata o erro ou o resultado da consulta
                res.send(error || result); // Se houver erro, ele será enviado, senão envia o resultado da consulta
            }
        );
    });

    // Define uma rota POST para criar um novo produto
    app.post("/produtos", function(req, res) {
        // Executa uma consulta no banco de dados para inserir um novo produto com os dados recebidos na requisição
        app.mysql.query(
            `INSERT INTO produtos (id, nome, preco) VALUES ('${req.body.id}', '${req.body.nome}', '${req.body.preco}')`, // SQL que insere um novo produto com os valores passados no corpo da requisição
            function onResult(error, result) { // Função de callback para tratar o erro ou o resultado da inserção
                res.send(error || result); // Se houver erro, ele é enviado; caso contrário, envia o resultado
            }
        );
    });

    // Define uma rota GET para buscar um produto específico por ID
    app.get("/produtos/:id", function(req, res) {
        // Executa uma consulta no banco de dados para buscar um produto com o ID fornecido na URL
        app.mysql.query(
            `SELECT id, nome, preco FROM produtos WHERE id = ${Number(req.params.id)}`, // SQL que seleciona um produto específico com o ID fornecido
            function onResult(error, result) { // Função de callback para tratar erro ou resultado
                res.send(error || result); // Se houver erro, ele será enviado, senão envia o resultado
            }
        );
    });

    // Define uma rota PUT para atualizar um produto existente pelo ID
    app.put("/produtos/:id", function(req, res) {
        // Executa uma consulta no banco de dados para atualizar um produto com o ID fornecido
        app.mysql.query(
            `UPDATE produtos SET nome = '${req.body.nome}', preco = '${req.body.preco}' WHERE produtos.id = ${Number(req.params.id)}`, // SQL que atualiza o produto com os novos dados (nome e preço)
            function onResult(error, result) { // Função de callback para tratar erro ou resultado
                res.send(error || result); // Se houver erro, ele é enviado, senão envia o resultado
            }
        );
    });

    // Define uma rota DELETE para excluir um produto específico pelo ID
    app.delete("/produtos/:id", function(req, res) {
        // Executa uma consulta no banco de dados para excluir um produto com o ID fornecido
        app.mysql.query(
            `DELETE FROM produtos WHERE produtos.id = ${Number(req.params.id)}`, // SQL que deleta o produto com o ID fornecido
            function onResult(error, result) { // Função de callback para tratar erro ou resultado
                res.send(error || result); // Se houver erro, ele é enviado, senão envia o resultado
            }
        );
    });
}
