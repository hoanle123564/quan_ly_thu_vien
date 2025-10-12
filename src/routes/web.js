const express = require('express')
const router = express.Router();
const { ThemNV, EditNV } = require('../controllers/NhanVienController')

router.get('/', (req, res) => {
    return res.send('hello')
})
router.get('/hello', (req, res) => {
    return res.render('hello.ejs')
})
router.post('/api/add-nhan-vien', ThemNV)
router.post('/api/edit-nhan-vien', EditNV)
module.exports = router