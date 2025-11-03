const express = require('express');
const router = express.Router();
const { getAllItems, addItem, deleteItem, updateItem, searchItems } = require('../controllers/itemcontrollers');

// عرض كل العناصر
router.get('/', getAllItems);

// إضافة عنصر
router.post('/add', addItem);

// حذف عنصر
router.get('/delete/:id', deleteItem);

// تعديل عنصر
router.post('/edit/:id', updateItem);

// 🔍 البحث
router.get('/search', searchItems);

module.exports = router;