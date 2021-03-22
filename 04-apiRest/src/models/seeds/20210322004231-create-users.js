const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'somename99',
        email: 'somename99@email.com',
        password_hash: await bcryptjs.hash('somepassword', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'somename100',
        email: 'somename100@email.com',
        password_hash: await bcryptjs.hash('somepassword', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'somename101',
        email: 'somename101@email.com',
        password_hash: await bcryptjs.hash('somepassword', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {},
};
