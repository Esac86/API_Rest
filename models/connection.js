const mysql = require('mysql')

const connection = mysql.createConnection({
 host: '162.241.60.16',
 user: 'esaccom_esac86',
 password: 'Soydel2005!!XD',
 database: 'esaccom_api',
 multipleStatements: true
})

connection.connect((err) => {
 if (err) {
   console.error('Error al conectar a la base de datos:', err)
   return
 }
 console.log('Conexión a la base de datos establecida')
})

module.exports = connection