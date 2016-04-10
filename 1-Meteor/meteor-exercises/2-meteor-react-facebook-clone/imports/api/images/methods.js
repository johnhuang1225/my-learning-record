import { Meteor } from 'meteor/meteor';

import { Images } from './iamges.js';

Meteor.methods({
  'changeAvatar': function (user, fileid) {
    var file = 'http://placehold.it/150x150';
    if (fileid) {
      file = Images.findOne({_id: fileid});
    }
    var data = file._id;

    Meteor.users.update(this.userId, {$set: {'profile.avatar': data}});
  }
});
