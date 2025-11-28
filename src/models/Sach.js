const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const sachSchema = new mongoose.Schema(
  {
    TENSACH: { type: String, required: true },
    DONGIA: { type: Number, required: true, min: 0 },
    SOQUYEN: { type: Number, required: true, min: 0 },
    NAMXUATBAN: { type: Number, required: true },
    MANXB: { type: Number, required: true, ref: "NHAXUATBAN" },
    TACGIA: { type: String },
  },
  { collection: "SACH" }
);
sachSchema.plugin(AutoIncrement, { inc_field: "MASACH" });
sachSchema.pre("save", async () => {
  try {
    const NHAXUATBAN = mongoose.model("NHAXUATBAN");
    const MANXB = NHAXUATBAN.exists({ MANXB: this.MANXB });
    if (!MANXB) {
      throw new Error(`Mã sách :${this.MANXB} không tồn tại`);
    }
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("SACH", sachSchema);
