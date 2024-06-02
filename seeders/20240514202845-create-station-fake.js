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
      "stations",
      [
        {
          name: "Bến xe Phương Trang",
          address: "Nguyễn Văn Cừ, Quận 3",
          province: "Hồ Chí Minh",
          createdAt: "2024-05-15 03:32:00",
          updatedAt: "2024-05-15 03:35:00",
        },
        {
          name: "Bến xe Thành Bưởi",
          address: "Nguyễn Văn Linh, Quận 1",
          province: "Cần Thơ",
          createdAt: "2024-04-15 03:32:00",
          updatedAt: "2024-05-15 04:35:00",
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
  },
};
