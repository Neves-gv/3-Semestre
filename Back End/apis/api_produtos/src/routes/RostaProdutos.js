import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// =========================
// LISTAR TODOS OS PRODUTOS
// =========================
router.get('/produtos', async (req, res) => {
    try {
        const resultado = await BD.query('SELECT * FROM produto ORDER BY id_produto');
        res.status(200).json(resultado.rows);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao listar produtos' });
    }
});

// =========================
// LISTAR PRODUTO POR ID
// =========================
router.get('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;
    try {
        const resultado = await BD.query(
            'SELECT * FROM produto WHERE id_produto = $1',
            [id_produto]
        );

        if (resultado.rowCount === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar produto' });
    }
});


// CRIAR PRODUTO
router.post('/produtos', async (req, res) => {
    const { nome, preco, link_imagem, url_imagem, categorias } = req.body;

    if (!nome || preco === undefined) {
        return res.status(400).json({ erro: 'Preencha os campos obrigatórios: nome e preço' });
    }

    try {
        await BD.query(
            'INSERT INTO produto (nome, preco, link_imagem, url_imagem, categorias) VALUES ($1, $2, $3, $4, $5)',
            [nome, preco, link_imagem || null, url_imagem || null, categorias || null]
        );

        res.status(201).json({ mensagem: 'Produto cadastrado' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao cadastrar produto' });
    }
});


// ATUALIZAR
router.put('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;
    const { nome, preco, link_imagem, url_imagem, categorias } = req.body;

    if (!nome || preco === undefined) {
        return res.status(400).json({ erro: 'Preencha os campos obrigatórios: nome e preço' });
    }

    try {
        const existe = await BD.query('SELECT * FROM produto WHERE id_produto = $1', [id_produto]);

        if (existe.rowCount === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }

        await BD.query(
            'UPDATE produto SET nome=$1, preco=$2, link_imagem=$3, url_imagem=$4, categorias=$5 WHERE id_produto=$6',
            [nome, preco, link_imagem || null, url_imagem || null, categorias || null, id_produto]
        );

        res.status(200).json({ mensagem: 'Produto atualizado' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar produto' });
    }
});


// ATUALIZAÇÃO 
router.patch('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;
    const { nome, preco, link_imagem, url_imagem, categorias } = req.body;

    try {
        const campos = [];
        const valores = [];
        let i = 1;

        if (nome !== undefined) { campos.push(`nome=$${i++}`); valores.push(nome); }
        if (preco !== undefined) { campos.push(`preco=$${i++}`); valores.push(preco); }
        if (link_imagem !== undefined) { campos.push(`link_imagem=$${i++}`); valores.push(link_imagem); }
        if (url_imagem !== undefined) { campos.push(`url_imagem=$${i++}`); valores.push(url_imagem); }
        if (categorias !== undefined) { campos.push(`categorias=$${i++}`); valores.push(categorias); }

        if (campos.length === 0) {
            return res.status(400).json({ erro: 'Nenhum campo enviado para atualização' });
        }

        valores.push(id_produto);

        await BD.query(
            `UPDATE produto SET ${campos.join(', ')} WHERE id_produto=$${i}`,
            valores
        );

        res.status(200).json({ mensagem: 'Produto atualizado parcialmente' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar produto' });
    }
});

// DELETAR 
router.delete('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;

    try {
        const existe = await BD.query('SELECT * FROM produto WHERE id_produto=$1', [id_produto]);

        if (existe.rowCount === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }

        await BD.query('DELETE FROM produto WHERE id_produto=$1', [id_produto]);
        res.status(200).json({ mensagem: 'Produto removido' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar produto' });
    }
});

export default router;