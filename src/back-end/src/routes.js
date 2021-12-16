const router = require('express').Router()

const { Clientes } = require('./models/')
const ServiceCliente = require('./controller/servicecliente')
const serviceCliente = new ServiceCliente(Clientes)

router.get('/',(req,res) => {
    console.log(req)
    res.send('Servido online!')
})



router.post('/cadastro', (req,res) => {
    serviceCliente.adicionarCliente(req,res)
})

router.get('/cadastro', (req,res) => {
    serviceCliente.getAll(res)
})



router.get('/cadastro/:id', (req,res) => {
    serviceCliente.getOne(req,res)
})

router.put('/cadastro/:id', (req,res)=> {
    serviceCliente.editar(req,res)
})
router.delete('/cadastro/:id', (req,res) => {
    serviceCliente.delete(req,res)
})

module.exports = router