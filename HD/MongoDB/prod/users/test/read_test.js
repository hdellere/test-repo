const assert = require('assert');
const User = require('./../src/user.js');

describe('Reading users from the database', () => {
  let joe, maria, alex, zach; //allows joe to be accessed in multiple blocks

  beforeEach((done) => {
    alex = new User({ name: 'Alex' });
    joe = new User({ name: 'Joe' });
    maria = new User({ name: 'Maria' });
    zach = new User({ name: 'Zach' });

    Promise.all([alex.save(), joe.save(), maria.save(), zach.save()])
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

  it('can skip and limit the result test', (done) => {
    User.find({})
      .sort({ name: 1})
      .skip(1)
      .limit(2)
        .then((users) => {
          assert.equal(users[0].name, 'Joe');
          assert.equal(users[1].name, 'Maria');
          assert.equal(users.length, 2);
          done();
      })
  });
});
