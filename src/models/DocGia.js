const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const docGiaSchema = new mongoose.Schema({
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
docGiaSchema.plugin(AutoIncrement, { inc_field: 'MADOCGIA' });

module.exports = mongoose.model('DOCGIA', docGiaSchema);
