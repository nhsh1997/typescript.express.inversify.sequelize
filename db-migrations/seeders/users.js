const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync();
const password = bcrypt.hashSync('momang', salt);

module.exports = [
  {
    user_id: 1000000000,
    first_name: 'Super',
    last_name: 'Admin',
    email: 'test@momang.monster',
    phone: '0937691111',
    password,
    is_super_admin: true,
    created_by: 1000000000,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    user_id: 1000000001,
    first_name: 'Mo',
    last_name: 'Admin',
    email: 'admin@momang.monster',
    phone: '0937691112',
    password,
    is_super_admin: false,
    created_by: 1000000000,
    created_at: new Date(),
    updated_at: new Date()
  }
];
