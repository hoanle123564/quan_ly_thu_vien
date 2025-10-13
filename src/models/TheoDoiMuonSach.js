const mongoose = require('mongoose');

const theoDoiMuonSchema = new mongoose.Schema({
    MADOCGIA: { type: String, required: true, ref: 'DOCGIA' },
    MASACH: { type: String, required: true, ref: 'SACH' },
    NGAYMUON: { type: Date, required: true },
    NGAYTRA: { type: Date }
}, { collection: 'THEODOIMUONSACH' });

module.exports = mongoose.model('THEODOIMUONSACH', theoDoiMuonSchema);
