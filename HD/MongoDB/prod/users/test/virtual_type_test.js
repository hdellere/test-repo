const assert = require('assert');
const User = require('../src/user')

describe('Virtual trypes', () => {
  it('post count returns number of posts', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'test post'}]
    });
    joe.save()
      .then(() => User.findOne({ name: 'Joe'}))
      .then((user) => {
        assert.equal(user.postCount, 1);
        done();
      })
  });
});
