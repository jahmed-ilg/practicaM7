'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
    Name: DataTypes.STRING,
    MotorLitros: DataTypes.DECIMAL(2,1),
    Company: DataTypes.STRING,
    Year: DataTypes.INTEGER,
    Electric: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};