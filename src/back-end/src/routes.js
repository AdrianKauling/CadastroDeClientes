const Express = require('express')
const router = Express.Router()

router.get('/',(req,res) => {
    res.send('Servido online!')
})

router.post('/cadastro', (req,res) => {
    const body = req.body

    res.json()
})

router.get('/cadastro', (req,res) => {


    res.json()
})

router.get('/cadastro/:id', (req,res) => {
    const id = req.params.id

    res.json
})

router.put('/cadastro/:id', (req,res)=> {
    const id = req.params.id

    res.json()
})

router.delete('/cadastro/:id', (Req,res) => {
    const id = req.params.id

    res.json()
})

module.exports = router