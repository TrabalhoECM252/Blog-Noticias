const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema({
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', usuariosSchema);