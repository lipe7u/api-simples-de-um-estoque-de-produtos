// Importa o framework Fastify para criar o servidor
import fastify from "fastify";

// Importa o plugin do Fastify para conectar ao MySQL
import fastifyMysql from '@fastify/mysql';

// Importa as rotas definidas no arquivo 'produtos.js'
import routes from './routes/produtos.js';

// Cria uma instância do Fastify, que será o servidor
const app = fastify();

// Registra o plugin fastifyMysql no servidor, configurando a conexão com o banco de dados
app.register(fastifyMysql, {
    connectionString: "mysql://root:root@localhost:3306/produtos" // String de conexão com o banco de dados MySQL
});

// Registra as rotas definidas no arquivo 'produtos.js', passando o app como argumento
routes(app);

// Inicia o servidor e escuta na porta 3000
app.listen({port: 3000}).then(() => {
    // Exibe uma mensagem no console informando que o servidor está rodando na porta 3000
    console.log("servidor rodando na porta 300");
});
