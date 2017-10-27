const assert = require('assert');
const User = require('./../src/user');

describe('Creating records', () => {
  it('saves a user', () => {
    //create user, joe becomes instance of User
    const joe = new User({ name: 'Joe' });
    //save user to be persistent
    joe.save();
    //test
  });
});
