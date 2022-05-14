'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      { username: "jawad",
        password: "jawad",
        email: "jahmed@ilg.cat" },
      { username: "ahmed",
        password: "ahmed",
        email: "ahmed@ilg.cat" },
      { username: "ruben",
        password: "ruben",
        email: "ruben@ilg.cat" }
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
