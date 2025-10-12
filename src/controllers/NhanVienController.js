const connection = require('../config/connectdb');

const ThemNV = async (req, res) => {
    try {
        const db = await connection();
        const result = await db.collection('NhanVien').insertOne(req.body);
        return res.status(201).json({ message: 'NhanVien added!', data: result });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
const EditNV = async (req, res) => {
    try {
        const db = await connection();
        const result = await db.collection('NhanVien').updateOne({ id: req.params.id }, { $set: req.body });
        return res.status(200).json({ message: 'NhanVien updated!', data: result });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
module.exports = { ThemNV, EditNV };