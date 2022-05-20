'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('cars', [
       
       {
       Name: 'i8',
       MotorLitros: 1.5,
       Company: 'BMW',
       Year: 2020,
       Electric: true
     },
     {
      Name: 'Fiesta',
      MotorLitros: 1.6,
      Company: 'Ford',
      Year: 2019,
      Electric: false
    },
    {
      Name: 'Cordoba',
      MotorLitros: 1.4,
      Company: 'Seat',
      Year: 2008,
      Electric: false
    },
    {
      Name: 'Polo',
      MotorLitros: 1.0,
      Company: 'VolksWagen',
      Year: 2018,
      Electric: false
    },
    {
      Name: 'Q4 E-TRON',
      MotorLitros: 0.0,
      Company: 'Audi',
      Year: 2022,
      Electric: true
    }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
