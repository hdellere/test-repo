const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {
  it('can create a subdocument', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'PostTitle' }]
    });
    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert.equal(user.posts[0].title, 'PostTitle');
        done()
      });
  });

  it('can add subdocument to existing record', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: []
    });
    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        user.posts.push({ title: 'new post' });
        return user.save();
      })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert.equal(user.posts[0].title, 'new post');
        done();
      })
  });

  it('can remove subdocument from existing record', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'Hello' }]
    });
    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        post = user.posts[0];
        post.remove();
        return user.save();
      })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert.equal(user.posts[0], null);
        done();
      });
  });
});
