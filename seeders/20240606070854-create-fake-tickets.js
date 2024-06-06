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
      "tickets",
      [
        {
          trip_id: "5",
          user_id: "2",
          createdAt: "2024-05-28 14:30:51",
          updatedAt: "2024-05-28 14:30:51",
        },

        {
          trip_id: "6",
          user_id: "3",
          createdAt: "2024-05-28 14:30:51",
          updatedAt: "2024-05-28 14:30:51",
        },

        {
          trip_id: "5",
          user_id: "2",
          createdAt: "2024-05-28 14:30:51",
          updatedAt: "2024-05-28 14:30:51",
        },

        {
          trip_id: "5",
          user_id: "3",
          createdAt: "2024-05-28 14:30:51",
          updatedAt: "2024-05-28 14:30:51",
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
    await queryInterface.bulkDelete("tickets", null, {});
  },
};
