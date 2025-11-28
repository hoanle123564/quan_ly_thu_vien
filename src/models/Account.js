const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    USERNAME: { type: String, required: true, unique: true },
    PASSWORD: { type: String, required: true },
    ROLE: { type: String, enum: ["user", "admin"], required: true },
    REF_ID: { type: Number, required: true }, // MADOCGIA OR MSNV
  },
  { collection: "ACCOUNT" }
);

module.exports = mongoose.model("ACCOUNT", accountSchema);
