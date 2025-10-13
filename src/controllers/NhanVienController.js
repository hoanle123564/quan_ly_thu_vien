const NhanVien = require('../models/NhanVien');

const ThemNV = async (req, res) => {
    try {
        const newNV = new NhanVien(req.body);
        const result = await newNV.save(); // Mongoose tự validate ở đây
        res.status(201).json({ message: 'Nhân viên thêm thành công', data: result });
    } catch (err) {
        res.status(400).json({ message: 'Lỗi thêm nhân viên', error: err.message });
    }
};
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