import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// LISTAR
router.get('/usuarios', async (req, res) => {
    try {
        const resultado = await BD.query('SELECT * FROM usuarios ORDER BY id_usuario');
        res.status(200).json(resultado.rows);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao listar usuários' });
    }
});

// CRIAR
router.post('/usuarios', async (req, res) => {
    const { nome, gmail, senha } = req.body;

    if (!nome || !gmail || !senha) {
        return res.status(400).json({ erro: 'Preencha todos os campos' });
    }

    try {
        await BD.query(
            'INSERT INTO usuarios(nome, gmail, senha) VALUES($1, $2, $3)',
            [nome, gmail, senha]
        );

        res.status(201).json({ mensagem: 'Usuário cadastrado' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
    }
});

// ATUALIZAR COMPLETO
router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, gmail, senha } = req.body;

    if (!nome || !gmail || !senha) {
        return res.status(400).json({ erro: 'Preencha todos os campos' });
    }

    try {
        const existe = await BD.query(
            'SELECT * FROM usuarios WHERE id_usuario = $1',
            [id_usuario]
        );

        if (existe.rowCount === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        await BD.query(
            'UPDATE usuarios SET nome=$1, gmail=$2, senha=$3 WHERE id_usuario=$4',
            [nome, gmail, senha, id_usuario]
        );

        res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
});

// ATUALIZAÇÃO PARCIAL
router.patch('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, gmail, senha } = req.body;

    try {
        const campos = [];
        const valores = [];
        let i = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${i++}`);
            valores.push(nome);
        }
        if (gmail !== undefined) {
            campos.push(`gmail = $${i++}`);
            valores.push(gmail);
        }
        if (senha !== undefined) {
            campos.push(`senha = $${i++}`);
            valores.push(senha);
        }

        if (campos.length === 0) {
            return res.status(400).json({ erro: 'Nenhum campo enviado' });
        }

        valores.push(id_usuario);

        await BD.query(
            `UPDATE usuarios SET ${campos.join(', ')} WHERE id_usuario = $${i}`,
            valores
        );

        res.status(200).json({ mensagem: 'Atualizado parcialmente' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
});

// DELETAR
router.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const existe = await BD.query(
            'SELECT * FROM usuarios WHERE id_usuario = $1',
            [id_usuario]
        );

        if (existe.rowCount === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        await BD.query(
            'DELETE FROM usuarios WHERE id_usuario = $1',
            [id_usuario]
        );

        res.status(200).json({ mensagem: 'Usuário removido' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }
});

export default router;