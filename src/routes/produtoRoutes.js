const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/ProdutoController');
const upload = require('../config/multer');

router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.put('/:id', upload.single('imagem'), ProdutoController.atualizar);

const { verificarToken, verificarAdmin } = require('../middlewares/authMiddleware')

router.post('/', upload.single('imagem'), verificarToken, verificarAdmin, ProdutoController.cadastrar);
router.delete('/:id', verificarToken, verificarAdmin, ProdutoController.deletar);

module.exports = router;