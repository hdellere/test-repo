const assert = require('assert');
const User = require('./../src/user.js');

describe('Reading users from the database', () => {
  let joe; //allows joe to be accessed in multiple blocks

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => { done(); })
  });

  it('Find all users with a name of Joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert.equal(users[0]._id.toString(), joe._id.toString());
        done();
      });
  });

  it('Find a user with a specific id', (done) => {
    User.findOne(({ _id: joe._id }))
      .then((user) => {
        assert.equal(user.name, 'Joe');
        done();
      });
  });
});
