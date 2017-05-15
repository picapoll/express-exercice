// Generar Jason buit=> npm init -y
// Instalar modul Express i ho afegeix al packet Jason=> npm install express --save
// Instalar Pug => npm install pug --save

const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {titlePage: 'My Super Cool web!'})
})

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))
