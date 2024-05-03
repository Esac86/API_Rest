const productModel = require('../models/productModel')

const getAllProducts = (req, res) => {
  productModel.getAllProducts((err, products) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(products)
  })
}

const getProductById = (req, res) => {
  const { id } = req.params
  productModel.getProductById(id, (err, product) => {
    if (err) return res.status(500).json({ error: err.message })
    if (!product.length) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json(product[0])
  })
}

const createProduct = (req, res) => {
  const newProduct = req.body
  productModel.createProduct(newProduct, (err, result) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json({ message: 'Producto creado', productId: result.insertId })
  })
}

const updateProduct = (req, res) => {
  const { id } = req.params
  const updatedProduct = req.body
  productModel.updateProduct(id, updatedProduct, (err, result) => {
    if (err) return res.status(500).json({ error: err.message })
    if (!result.affectedRows) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json({ message: 'Producto actualizado' })
  })
}

const deleteProduct = (req, res) => {
  const { id } = req.params
  productModel.deleteProduct(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message })
    if (!result.affectedRows) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json({ message: 'Producto eliminado' })
  })
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}