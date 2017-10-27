const assert = require('assert');
const User = require('./../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    //create user, joe becomes instance of User
    const joe = new User({ name: 'Joe' });
    //save user to be persistent
    //save will return a promise when complete
    joe.save()
      .then(() => {
        //test, isNew flag goes to false when saved to DB
        assert.equal(joe.isNew, false);
        done();
      });
  });
});
