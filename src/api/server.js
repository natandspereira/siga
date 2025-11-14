import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

async function startServer() {
    try {
        const db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        console.log('Conectado ao banco!');

        // GET
        app.get('/tarefas', async (req, resp) => {
            try {
                const [rows] = await db.query('SELECT * FROM tarefas');
                resp.json(rows);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
                resp.status(500).json({error: 'Erro ao buscar tarefas'});
            }
        });
        
        // POST
        app.post('/criar', async (req, resp) => {
            try {
                const { tarefa, prioridade, status, prazo } = req.body;

                const [result] = await db.query(
                    'INSERT INTO tarefas (tarefa, prioridade, status, prazo) VALUES (?,?, ?, ?)', [tarefa, prioridade, status, prazo]
                );

                resp.status(201).json({
                    message: 'Tarefa criada com sucesso!',
                    tarefaID: result.insertId,
                })
            } catch (error) {
                console.error('Erro ao criar tarefa:', error);
                resp.status(500).json({ error: 'Erro ao criar tarefa' });
            }
        });
        
        // DELETE
        app.delete('/deletar/:id', async (req, resp)=>{
            try {
                const { id } = req.params;

                const [result] = await db.query('DELETE FROM tarefas WHERE id =?', [id]);

                if(result.affectedRows === 0) return resp.status(404).json({ error: 'Tarefa não encontrada.'});

                return resp.status(200).json({ message: 'Tarefa deletada com sucesso!'});
            } catch (error) {
                console.error('Erro ao deletar tarefa:', error);
                return resp.status(500).json({ error: 'Erro ao deletar tarefa.' });
            }
        });

        // UPDATE
        app.patch('/editar', async (req,resp)=>{
            try {
                const {id, ...dados} = req.body;

                if(!id) return resp.status(400).json({ message: 'ID da tarefa é obrigatório!'});

                if(Object.keys(dados).length === 0) return resp.status(400).json({ message: 'Nenhum campo para atualizar foi enviado!'});

                const campos = Object.keys(dados)
                .map(campo => `${campo} = ?`)
                .join(', ');

                const valores = Object.values(dados);
                valores.push(id);

                const [result] = await db.query(`UPDATE tarefas SET ${campos} WHERE id = ?`, valores);

                if(result.affectedRows === 0) return resp.status(404).json({ message: 'Tarefa não encontrada!'});

                resp.status(200).json({ message: 'Tarefa atualizada com sucesso!'});
            } catch (error) {
                console.error('Erro ao editar tarefa', error);
                resp.status(500).json({ message: 'Erro interno do servidor'});
            }
        })

        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

    } catch (error) {
        console.error('Erro ao tentar conectar ao banco', error);
    }
}

startServer();