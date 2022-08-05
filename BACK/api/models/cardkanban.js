'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cardKanban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cardKanban.init({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    lista: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cardKanban',
  });
  return cardKanban;
};