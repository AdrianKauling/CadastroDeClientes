const Express = require('express')
const router = Express.Router()

const { Clientes } = require('./models/')



router.get('/',(req,res) => {
    console.log(req)
    res.send('Servido online!')
})



router.post('/cadastro',async (req,res) => {
    console.log(req)
    const body = req.body
    await Clientes.create(body)
    res.json(body)
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

router.delete('/cadastro/:id', (req,res) => {
    const id = req.params.id

    res.json()
})

module.exports = router