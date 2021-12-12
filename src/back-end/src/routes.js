const Express = require('express')
const router = Express.Router()

router.get('/', (req,res) => {
    res.send('Sucesso')
})

module.exports = router