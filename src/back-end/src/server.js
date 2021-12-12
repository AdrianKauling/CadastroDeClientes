const Express = require("express")
const App = Express()
const cors = require('cors')
const routes = require('./routes')

App.use(cors())
App.use(routes)
App.use(Express.json())

App.listen(8080)