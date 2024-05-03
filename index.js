const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/api', productRoutes)

const PORT = process.env.PORT || 20646
app.listen(PORT, () => {
  console.log(`Servidor encendido en el puerto ${PORT}`)
})