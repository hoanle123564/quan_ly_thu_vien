const express = require("express");
const router = express.Router();
const {
  ThemNV,
  EditNV,
  GetNV,
  DeleteNV,
  LoginNhanVien,
  GetDetailNV,
} = require("../controllers/NhanVienController");
const {
  ThemDocGia,
  EditDocGia,
  GetDocGia,
  DeleteDocGia,
  LoginDocGia,
  GetDetailDocGia,
} = require("../controllers/DocGiaController");
const {
  ThemNHAXUATBAN,
  EditNHAXUATBAN,
  GetNHAXUATBAN,
  DeleteNHAXUATBAN,
} = require("../controllers/NhaXuatBanController");
const {
  ThemSACH,
  EditSACH,
  GetSACH,
  DeleteSACH,
} = require("../controllers/SachController");
const {
  ThemTHEODOIMUONSACH,
  EditTHEODOIMUONSACH,
  GetTHEODOIMUONSACH,
  DeleteTHEODOIMUONSACH,
  MuonSach,
  TraSach,
  GetTHEODOIprivate,
  GetLichSuMuonPrivate,
} = require("../controllers/TheoDoiMuonSachController");

const {
  getSummary,
  borrowByMonth,
  topBooks,
  borrowStatus,
} = require("../controllers/Summary");
router.get("/", (req, res) => {
  return res.send("hello");
});
router.get("/hello", (req, res) => {
  return res.render("hello.ejs");
});

// CRUD NhanVien
router.post("/api/add-staff", ThemNV);
router.patch("/api/edit-staff", EditNV);
router.get("/api/get-all-staff", GetNV);
router.get("/api/get-detail-staff", GetDetailNV);
router.delete("/api/delete-staff", DeleteNV);
router.post("/api/login-nhanvien", LoginNhanVien);

// CRUD DOCGIA
router.post("/api/add-docgia", ThemDocGia);
router.patch("/api/edit-docgia", EditDocGia);
router.get("/api/get-all-docgia", GetDocGia);
router.get("/api/get-detail-docgia", GetDetailDocGia);

router.delete("/api/delete-docgia/:id", DeleteDocGia);
router.post("/api/login-docgia", LoginDocGia);

// CRUD NHAXUATBAN
router.post("/api/add-NXB", ThemNHAXUATBAN);
router.patch("/api/edit-NXB", EditNHAXUATBAN);
router.get("/api/get-all-NXB", GetNHAXUATBAN);
router.delete("/api/delete-NXB", DeleteNHAXUATBAN);

// CRUD SACH
router.post("/api/add-sach", ThemSACH);
router.patch("/api/edit-sach", EditSACH);
router.get("/api/get-all-sach", GetSACH);
router.delete("/api/delete-sach", DeleteSACH);

// CRUD THEODOIMUONSACH
router.post("/api/add-theodoi", ThemTHEODOIMUONSACH);
router.patch("/api/edit-theodoi", EditTHEODOIMUONSACH);
router.get("/api/get-all-theodoi", GetTHEODOIMUONSACH);
router.get("/api/get-all-theodoi-private", GetTHEODOIprivate);
router.get("/api/get-all-LichSuMuon-private", GetLichSuMuonPrivate);
router.delete("/api/delete-theodoi", DeleteTHEODOIMUONSACH);
router.post("/api/muon-sach", MuonSach);
router.post("/api/tra-sach", TraSach);

// SUMMARY
router.get("/api/summary", getSummary);
router.get("/api/summary/borrow-by-month", borrowByMonth);
router.get("/api/summary/top-books", topBooks);
router.get("/api/summary/borrow-status", borrowStatus);
module.exports = router;
