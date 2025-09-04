// index.js
const express = require('express');
const app = express();
const tarefaRoutes = require('./routes/tarefas')

app.use(express.json());

// Montar as rotas de tarefas sob o prefixo /tarefas
app.use('/tarefas', tarefaRoutes);


// (Adicionaremos o middleware de erro aqui no próximo módulo)

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
