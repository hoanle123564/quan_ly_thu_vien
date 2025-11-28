const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const docGiaSchema = new mongoose.Schema(
  {
    MADOCGIA: {
      type: String,
      required: true,
      unique: true,
    },
    HOLOT: {
      type: String,
      required: true,
    },
    TEN: {
      type: String,
      required: true,
    },
    NGAYSINH: {
      type: Date,
      required: true,
    },
    PHAI: {
      type: String,
      enum: ["Nam", "Nữ"],
      required: true,
    },
    DIACHI: {
      type: String,
      required: true,
    },
    DIENTHOAI: {
      type: String,
      match: /^[0-9]{9,11}$/,
      required: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { collection: "DOCGIA" }
);
module.exports = mongoose.model("DOCGIA", docGiaSchema);
