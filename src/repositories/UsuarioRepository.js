const pool = require('../config/database');

class UsuarioRepository {
    async create(userData) {
        const {nome, email, senha, papel} = userData;
        const [result] = await pool.query('INSERT INTO usuario (nome, email, senha, papel) VALUES (?, ?, ?, ?)', [nome, email, senha, papel]);
        return result.insertId;
    };
    async findByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        return rows[0];
    };
}

module.exports = new UsuarioRepository();