const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const modelClientes = require('./clientes')

const Clientes = modelClientes(DataTypes,connection)


module.exports = {
    Clientes,
    connection
}
