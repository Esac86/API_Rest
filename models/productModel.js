const connection = require('./connection')

const getAllProducts = (callback) => {
  connection.query('SELECT * FROM products', callback)
}

const getProductById = (id, callback) => {
  connection.query('SELECT * FROM products WHERE id = ?', [id], callback)
}

const createProduct = (product, callback) => {
  connection.query('INSERT INTO products SET ?', product, callback)
}

const updateProduct = (id, product, callback) => {
  connection.query('UPDATE products SET ? WHERE id = ?', [product, id], callback)
}

const deleteProduct = (id, callback) => {
  connection.query('DELETE FROM products WHERE id = ?', [id], callback)
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}