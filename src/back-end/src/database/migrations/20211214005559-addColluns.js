'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
         queryInterface.addColumn('Clientes', 'profissao', {
          type: Sequelize.STRING,
          allowNull: false
  
        }, { transaction: t })
      ]) 
    })
    
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.removeColumn('Clientes', 'profissao', { transaction: t }) 
      ])
    })
    
  }
};
