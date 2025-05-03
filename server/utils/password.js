const bcrypt = require('bcrypt');
const saltRounds = 10;
const hash = await bcrypt.hash(password, saltRounds);