const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
    async registrar(req, res) {
        try {
            const result = await UsuarioService.registrarUsuario(req.body);
            res.status(201).json(result);
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro.stack || erro
            });
        }
    }
    async login(req, res) {
        try {
            const {email, senha} = req.body;
            const result = await UsuarioService.loginUsuario(email, senha);
            res.status(200).json(result);
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro.stack || erro
            });
        }
    }
}

module.exports = new UsuarioController();