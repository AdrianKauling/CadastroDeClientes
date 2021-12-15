const Express = require("express")
const App = Express()
const cors = require('cors')
const routes = require('./routes')

const Sequelize = require('sequelize')

App.use(cors())
App.use(Express.json())


App.use(routes)

App.listen(8080)