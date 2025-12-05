const NHAXUATBAN = require("../models/NhaXuatBan");

const ThemNHAXUATBAN = async (req, res) => {
  try {
    // const newNHAXUATBAN = new NHAXUATBAN(req.body);
    const newNHAXUATBAN = new NHAXUATBAN(req.body);
    const result = await newNHAXUATBAN.save(); // Mongoose tự validate ở đây
    res
      .status(201)
      .json({ message: "Nhà xuất bản thêm thành công", data: result });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Lỗi thêm nhà xuất bản", error: err.message });
  }
};
const EditNHAXUATBAN = async (req, res) => {
  try {
    const { MANXB } = req.body;
    const result = await NHAXUATBAN.findOneAndUpdate({ MANXB }, req.body, {
      new: true,
    });
    if (!result)
      return res.status(404).json({ message: "Không tìm thấy nhà xuất bản" });

    res.json({ message: "Cập nhật thành công", data: result });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const GetNHAXUATBAN = async (req, res) => {
  try {
    const list = await NHAXUATBAN.find();
    return res.status(200).json({ message: "list NHAXUATBAN!", data: list });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Can't get list NHAXUATBAN", error: err.message });
  }
};
const DeleteNHAXUATBAN = async (req, rs) => {
  try {
    await NHAXUATBAN.deleteOne({ MANXB: 1 });
    const result = await NHAXUATBAN.findOne({ MANXB: 1 });
    return res.status(200).json({ message: "Delete complete !" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Can't delete", error: err.message });
  }
};
module.exports = {
  ThemNHAXUATBAN,
  EditNHAXUATBAN,
  GetNHAXUATBAN,
  DeleteNHAXUATBAN,
};
