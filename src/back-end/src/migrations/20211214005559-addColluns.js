'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
         queryInterface.addColumn('clientes', 'profissao', {
          type: Sequelize.STRING,
          allowNull: false
  
        }, { transaction: t })
      ]) 
    })
    
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.removeColumn('clientes', 'profissao', { transaction: t }) 
      ])
    })
    
  }
};
