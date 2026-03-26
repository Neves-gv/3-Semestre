import express from 'express';
import rankingController from '../controllers/Rankingcontroller.js';

const router = express.Router();

router.get('/ranking', rankingController.listarRanking);
router.post('/ranking', rankingController.criarRanking);
router.post('/ranking/atualizar-nivel', rankingController.atualizarNivel);

export default router;