const Sequelize = require('sequelize')
const configDB = require('../config/db')

const connection = new Sequelize (configDB)
connection.authenticate().then(() => console.log('Conectado'))

module.exports = connection