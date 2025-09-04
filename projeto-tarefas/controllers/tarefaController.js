
// controllers/tarefaController.js
const { runQuery, getQuery, allQuery, updateQuery, deleteQuery } = require('../database/database-helper');

exports.createTask = async (req, res, next) => {
  try {
    const { titulo, descricao } = req.body;
    if (!titulo) {
      return res.status(400).json({ error: 'O título é obrigatório.' });
    }
    const sql = `INSERT INTO tarefas (titulo, descricao, concluida, data_criacao) VALUES (?,?, 0, datetime('now'))`;
    const result = await runQuery(sql, [titulo, descricao]);
    res.status(201).json({ id: result.lastID, titulo, descricao, concluida: 0 });
  } catch (error) {
    next(error); // Passa o erro para o middleware de erro
  }
};

exports.getAllTasks = async (req, res, next) => {
  try {
    const sql = `SELECT * FROM tarefas`;
    const tarefas = await allQuery(sql);
    res.status(200).json(tarefas);
  } catch (error) {
    next(error);
  }
};


exports.getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `SELECT * FROM tarefas WHERE id =?`;
    const tarefa = await getQuery(sql, [id]);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.status(200).json(tarefa);
  } catch (error) {
    next(error);
  }
}

exports.getUpdateTask = async(req, res, next) => {
    try {
        const { column , update, id } = req.body;
        const sql = `UPDATE tarefas SET ?? = ? WHERE tarefas.id = ?`
        const result = await updateQuery(sql, [column, update,id])
        if(!result){
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

exports.getDeleteTask = async(req, res, next) => {
    try {
        const { id } = req.params
        const sql = `DELETE FROM tarefas WHERE tarefas.id = ?`
        const result = await deleteQuery(sql,[id])
        if(!result){
            return res.status(404).json({ error: 'Não foi possível excluír a tarefa!.' });
        }
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}
