const Item = require('../models/itemmodel');

// عرض كل العناصر
const getAllItems = async (req, res) => {
  const items = await Item.find();
  res.render('index', { items });
};

// إضافة عنصر جديد
const addItem = async (req, res) => {
  const { name, price } = req.body;
  const newItem = new Item({ name, price });
  await newItem.save();
  res.redirect('/');
};

// حذف عنصر
const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/');
};

// تعديل عنصر
const updateItem = async (req, res) => {
  const { name, price } = req.body;
  await Item.findByIdAndUpdate(req.params.id, { name, price });
  res.redirect('/');
};

// 🔍 البحث عن منتج بالاسم
const searchItems = async (req, res) => {
  const query = req.query.q;
  const items = await Item.find({ name: { $regex: query, $options: 'i' } });
  res.render('index', { items });
};

// ✅ التصدير
module.exports = {
  getAllItems,
  addItem,
  deleteItem,
  updateItem,
  searchItems
};