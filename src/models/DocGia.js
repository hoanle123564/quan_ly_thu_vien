const mongoose = require('mongoose');

const docGiaSchema = new mongoose.Schema({
    MADOCGIA: {
        type: String,
        required: true,
        unique: true
    },
    HOLOT: {
        type: String,
        required: true
    },
    TEN: {
        type: String,
        required: true
    },
    NGAYSINH: {
        type: Date,
        required: true
    },
    PHAI: {
        type: String,
        enum: ['Nam', 'Nữ'],
        required: true
    },
    DIACHI: {
        type: String,
        required: true
    },
    DIENTHOAI: {
        type: String,
        match: /^[0-9]{9,11}$/,
        required: true
    }
}, { collection: 'DOCGIA' });

module.exports = mongoose.model('DOCGIA', docGiaSchema);
