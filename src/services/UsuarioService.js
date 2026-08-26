const ProdutoRepository = require('../repositories/ProdutoRepository');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

class UsuarioService {
    async registrarUsuario(dados) {
        const {nome, email, senha, papel} = dados;
        if (!nome || !email || !senha) throw { mensagem: "Nome, email e senha são itens obrigatórios!" }

        const novoUsuario = {
            nome, 
            email,
            senha: senhaHash,
            papel: role
        };
    };
    async loginUsuario(email, senha) {};
};

module.exports = new UsuarioService();