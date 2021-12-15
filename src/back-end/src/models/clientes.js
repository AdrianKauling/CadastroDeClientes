'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
   
    static associate(models) {
    }
  };

  
  clientes.init({
    cpf: DataTypes.BIGINT,
    nome: DataTypes.STRING,
    dtNasc: DataTypes.DATE,
    sexo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};