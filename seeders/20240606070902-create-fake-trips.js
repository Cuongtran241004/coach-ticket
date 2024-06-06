"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 11,
          toStation: 12,
          startTime: "2024-06-06 03:10:10",
          price: 200000,
          createdAt: "2024-06-02 03:10:10",
          updatedAt: "2024-06-02 03:10:10",
        },

        {
          fromStation: 13,
          toStation: 14,
          startTime: "2024-06-06 03:10:10",
          price: 300000,
          createdAt: "2024-06-02 03:10:10",
          updatedAt: "2024-06-02 03:10:10",
        },

        {
          fromStation: 11,
          toStation: 14,
          startTime: "2024-06-06 03:10:10",
          price: 500000,
          createdAt: "2024-06-02 03:10:10",
          updatedAt: "2024-06-02 03:10:10",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("trips", null, {});
  },
};
