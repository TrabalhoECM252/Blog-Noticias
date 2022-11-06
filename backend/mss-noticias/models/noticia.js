const mongoose = require('mongoose');

const noticiasSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: false, default: '00000000' },
    texto: { type: String, required: true },
    data: { type: Date, required: false }
});

module.exports = mongoose.model('Noticia', noticiasSchema);