const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('Association Test', () => {
  let joe, blogPost, comment;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' })
    blogPost = new BlogPost({ title: 'Oh Hello', content: 'Hello to you sir!' });
    comment = new Comment({ content: 'Lol Wut.' });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = joe;

    Promise.all([
      joe.save(),
      blogPost.save(),
      comment.save(),
    ])
      .then(() => done());
  });

  it('saves relation from user and blogpost', (done) => {
    User.findOne({ name: 'Joe' })
      .populate('blogPosts')
      .then((user) => {
        assert.equal(user.blogPosts[0].title, blogPost.title);
        done();
      });
  });

  it('saves a full relation graph', (done) => {
    User.findOne({ name: 'Joe' })
      .populate({
        path: 'blogPosts',
        populate: {
          path: 'comments',
          model: 'comment',
          populate: {
            path: 'user',
            model: 'user'
          }
        }
      })
      .then((user) => {
        assert.equal(user.name, 'Joe');
        assert.equal(user.blogPosts[0].title, 'Oh Hello');
        assert.equal(user.blogPosts[0].comments[0].content, comment.content);
        assert.equal(user.blogPosts[0].comments[0].user.name, joe.name);
        done();
      });
  });
});
