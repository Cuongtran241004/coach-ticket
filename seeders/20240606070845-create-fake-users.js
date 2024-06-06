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
      "users",
      [
        {
          name: "Mai Hoa",
          email: "hoa@gmail.com",
          password: "123456",
          phone: "0867940736",
          avatar:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnordic.ign.com%2Favatar-generations&psig=AOvVaw1lh2Rx__ya19uVuhSedmVH&ust=1717744775584000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiJqoy4xoYDFQAAAAAdAAAAABAE",
          type: "admin",
          createdAt: "2024-05-28 14:30:51",
          updatedAt: "2024-05-28 14:30:51",
        },

        {
          name: "Huỳnh Như",
          email: "nhu@gmail.com",
          password: "123456",
          phone: "0867940736",
          avatar:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnordic.ign.com%2Favatar-generations&psig=AOvVaw1lh2Rx__ya19uVuhSedmVH&ust=1717744775584000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiJqoy4xoYDFQAAAAAdAAAAABAE",
          type: "admin",
          createdAt: "2024-05-28 14:30:51",
          updatedAt: "2024-05-28 14:30:51",
        },

        {
          name: "Kiều Thu",
          email: "thu@gmail.com",
          password: "123456",
          phone: "0867940736",
          avatar:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnordic.ign.com%2Favatar-generations&psig=AOvVaw1lh2Rx__ya19uVuhSedmVH&ust=1717744775584000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiJqoy4xoYDFQAAAAAdAAAAABAE",
          type: "admin",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
