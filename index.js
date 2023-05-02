const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
const chef = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chef)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    const selectedChef = chef.find(n => n.id == id)
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})