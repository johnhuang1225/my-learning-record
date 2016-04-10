import { Meteor } from 'meteor/meteor';

import { Posts } from './posts.js';

Meteor.methods({
  'Posts.insert': function (message, imageurl) {
    var post = {
      user: Meteor.user(),
      createdAt: new Date(),
      imageurl: imageurl,
      message: message,
      likes: [],
      comments: []
    };
    Posts.insert(post);
  },
  'likePost': function (userid, postid) {
    console.log(userid, postid);
    Posts.update(postid, {$addToSet: {likes: this.userId}});
  }
});
