import { Router } from "express";
import { BD } from "../../db.js";
import { autenticarToken } from "../middlewares/autenticacao.js";
import bcrypt from 'bcrypt';
import jst from 'jsonwebtoken';

const router = Router();

// LISTAR USUÁRIOS
router.get('/usuarios',autenticarToken, async (req, res) => {
    try {
        const query = `SELECT id_usuario, nome, email, tipo FROM USUARIOS ORDER BY id_usuario`;
        const usuarios = await BD.query(query);
        return res.status(200).json(usuarios.rows);
    } catch (error) {
        console.error('Erro ao listar usuários', error.message);
        return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});

// BUSCAR USUÁRIO POR ID
router.get('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const query = `SELECT id_usuario, nome, email, tipo FROM USUARIOS WHERE id_usuario = $1`;
        const resultado = await BD.query(query, [id_usuario]);
        if (resultado.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar usuário', error.message);
        return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

// CADASTRAR USUÁRIO
router.post('/usuarios', async (req, res) => {
    const { nome, email, senha, tipo } = req.body;
    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const comando = `INSERT INTO USUARIOS(nome, email, senha, tipo) VALUES($1, $2, $3, $4) RETURNING id_usuario, nome, email, tipo`;
        const valores = [nome, email, senhaCriptografada, tipo];
        const resultado = await BD.query(comando, valores);
        return res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar usuário', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        const comando = 'SELECT * FROM USUARIOS WHERE email = $1';
        const resultado = await BD.query(comando, [email]);

        if (resultado.rows.length === 0) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const usuario = resultado.rows[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        return res.status(200).json({
            message: 'Login realizado',
            usuario: { id_usuario: usuario.id_usuario, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo }
        });
    } catch (error) {
        console.error('Erro ao realizar login', error.message);
        return res.status(500).json({ error: 'Erro ao realizar login' });
    }
});

// ATUALIZAR USUÁRIO
router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, tipo } = req.body;
    try {
        const query = `UPDATE USUARIOS SET nome = $1, email = $2, tipo = $3 WHERE id_usuario = $4`;
        const resultado = await BD.query(query, [nome, email, tipo, id_usuario]);
        if (resultado.rowCount === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar usuário', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// DELETE
router.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const comando = `DELETE FROM USUARIOS WHERE id_usuario = $1`;
        const resultado = await BD.query(comando, [id_usuario]);
        
        if (resultado.rowCount === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        
        return res.status(200).json({ message: "Usuário removido com sucesso" });
    } catch (error) {
        console.error('Erro ao remover usuário', error.message);
        return res.status(500).json({ error: 'Erro ao remover usuário' });
    }
});

export default router;