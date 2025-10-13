const DOCGIA = require('../models/DocGia');
const ThemDocGia = async (req, res) => {
    try {
        // const newDocGia = new DOCGIA(req.body);
        const newDocGia = new DOCGIA({
            HOLOT: 'Lê',
            TEN: 'Hoàn',
            NGAYSINH: '01',
            PHAI: 'Nam',
            DIACHI: 'Cần Thơ City',
            DIENTHOAI: '0868487499'
        });
        const result = await newDocGia.save(); // Mongoose tự validate ở đây
        res.status(201).json({ message: 'Độc giả thêm thành công', data: result });
    } catch (err) {
        res.status(400).json({ message: 'Lỗi thêm độc giả', error: err.message });
    }
};
const EditDocGia = async (req, res) => {
    try {
        await DOCGIA.updateOne({ MADOCGIA: 1 }, req.body);
        const result = await DOCGIA.findOne({ MADOCGIA: 1 });
        return res.status(200).json({ message: 'DOCGIA updated!', data: result });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
const GetDocGia = async (req, res) => {
    try {
        const list = await DOCGIA.find();
        return res.status(200).json({ message: 'list DOCGIA!', data: list });
    } catch (error) {
        return res.status(500).json({ message: "Can't get list DOCGIA", error: err.message });

    }
}
const DeleteDocGia = async (req, rs) => {
    try {
        await DOCGIA.deleteOne({ MADOCGIA: 1 });
        const result = await DOCGIA.findOne({ MADOCGIA: 1 });
    } catch (error) {
        return res.status(500).json({ message: "Can't delete", error: err.message });
    }
}
module.exports = { ThemDocGia, EditDocGia, GetDocGia, DeleteDocGia };