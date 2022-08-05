'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cardKanbans', [{
       titulo: "Novo card",
       conteudo: "Sem conteudo",
       lista: "A fazer",
       createdAt: new Date(),
       updatedAt: new Date() 
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
     
  }
};
