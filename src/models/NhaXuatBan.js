const mongoose = require('mongoose');

const nxbSchema = new mongoose.Schema({
    MANXB: { type: String, required: true, unique: true },
    TENNXB: { type: String, required: true },
    DIACHI: { type: String, required: true }
}, { collection: 'NHAXUATBAN' });

module.exports = mongoose.model('NHAXUATBAN', nxbSchema);
