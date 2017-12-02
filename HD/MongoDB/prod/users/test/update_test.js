const assert = require('assert');
const User = require('./../src/user.js');

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe', likes: 0 });
    joe.save()
      .then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert.equal(users.length, 1);
        assert.equal(users[0].name, 'Alex');
        done();
      });
  }

  it('instance type usin set n save', (done) => {
    //update a property and then save it to the database
    joe.set('name', 'Alex');
    assertName(joe.save(), done);
  });

  it('instance type using update function', (done) => {
    //update and save all in one go!
    assertName(joe.update({ name: 'Alex' }), done);
  });

  it('Class type update', (done) => {
    assertName(
      User.update({ name: 'Joe' }, { name: 'Alex' }),
      done
    );
  });

  it('Class type findOneAndUpdate', (done) => {
    assertName(
      User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
      done
    );
  });

  it('Class type findByIdAndUpdate', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
      done
    );
  });

  it('A user can have likes incremented', (done) => {
    //using update operators such as $inc
    User.update({ name: 'Joe' }, { $inc: { likes: 1 } })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert.equal(user.likes, 1)
        done();
      });

  });

});
