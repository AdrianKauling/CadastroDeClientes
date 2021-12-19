
const { Model } = require('sequelize')
module.exports = (DataTypes, connection) => {

class Clientes extends Model {}

Clientes.init({
    cpf: {
        type: DataTypes.BIGINT,
        unique:true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dtNasc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profissao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection,
    freezeTableName: true
})

return Clientes
}