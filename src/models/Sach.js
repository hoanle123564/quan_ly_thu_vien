const mongoose = require('mongoose');

const sachSchema = new mongoose.Schema({
    MASACH: { type: String, required: true, unique: true },
    TENSACH: { type: String, required: true },
    DONGIA: { type: Number, required: true, min: 0 },
    SOQUYEN: { type: Number, required: true, min: 1 },
    NAMXUATBAN: { type: Number, required: true },
    MANXB: { type: String, required: true, ref: 'NHAXUATBAN' },
    NGUON_GOC_TACGIA: { type: String }
}, { collection: 'SACH' });

module.exports = mongoose.model('SACH', sachSchema);
