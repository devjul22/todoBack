/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const carsData = [
      {
        id: 1,
        name: 'Audi',
        img: '/car1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'BMW',
        img: '/car2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Porshe',
        img: '/car3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Mersedes',
        img: '/car4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Cars', carsData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
