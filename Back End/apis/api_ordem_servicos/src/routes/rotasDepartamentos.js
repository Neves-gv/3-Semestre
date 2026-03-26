import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();


// =========================
// DEPARTAMENTOS
// =========================

// LISTAR
router.get('/departamentos', async (req, res) => {
    try {
        const resultado = await BD.query(
            `SELECT * FROM departamentos ORDER BY id_departamento`
        );
        res.status(200).json(resultado.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao listar departamentos' });
    }
});

// CRIAR
router.post('/departamentos', async (req, res) => {
    const { nome, descricao } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: 'Nome é obrigatório' });
    }

    try {
        const resultado = await BD.query(
            `INSERT INTO departamentos (nome, descricao)
             VALUES ($1, $2)
             RETURNING *`,
            [nome, descricao]
        );

        res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao cadastrar departamento' });
    }
});

// ATUALIZAR
router.put('/departamentos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: 'Nome é obrigatório' });
    }

    try {
        const existe = await BD.query(
            `SELECT * FROM departamentos WHERE id_departamento = $1`,
            [id]
        );

        if (existe.rowCount === 0) {
            return res.status(404).json({ erro: 'Departamento não encontrado' });
        }

        const resultado = await BD.query(
            `UPDATE departamentos
             SET nome = $1, descricao = $2
             WHERE id_departamento = $3
             RETURNING *`,
            [nome, descricao, id]
        );

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar departamento' });
    }
});

// DELETAR
router.delete('/departamentos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await BD.query(
            `DELETE FROM departamentos
             WHERE id_departamento = $1
             RETURNING *`,
            [id]
        );

        if (resultado.rowCount === 0) {
            return res.status(404).json({ erro: 'Departamento não encontrado' });
        }

        res.status(200).json({ mensagem: 'Departamento removido' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar departamento' });
    }
});


// =========================
// USUÁRIOS
// =========================

// ATUALIZAÇÃO COMPLETA
router.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: 'Preencha todos os campos' });
    }

    try {
        const resultado = await BD.query(
            `UPDATE usuarios
             SET nome=$1, email=$2, senha=$3
             WHERE id_usuario=$4
             RETURNING *`,
            [nome, email, senha, id]
        );

        if (resultado.rowCount === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
});

// ATUALIZAÇÃO PARCIAL
router.patch('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const campos = [];
        const valores = [];
        let i = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${i++}`);
            valores.push(nome);
        }
        if (email !== undefined) {
            campos.push(`email = $${i++}`);
            valores.push(email);
        }
        if (senha !== undefined) {
            campos.push(`senha = $${i++}`);
            valores.push(senha);
        }

        if (campos.length === 0) {
            return res.status(400).json({ erro: 'Nenhum campo enviado' });
        }

        valores.push(id);

        const resultado = await BD.query(
            `UPDATE usuarios
             SET ${campos.join(', ')}
             WHERE id_usuario = $${i}
             RETURNING *`,
            valores
        );

        if (resultado.rowCount === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
});

// DELETAR
router.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await BD.query(
            `DELETE FROM usuarios
            WHERE id_usuario = $1
             RETURNING *`,
            [id]
        );

        if (resultado.rowCount === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        res.status(200).json({ mensagem: 'Usuário removido' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }
});

export default router;