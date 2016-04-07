import { Slingshot } from 'meteor/edgee:slingshot';
import { Random } from 'meteor/random';

Slingshot.fileRestrictions("uploadToAmazon", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
});

Slingshot.createDirective("uploadToAmazon", Slingshot.S3Storage, {
  bucket: "meteor-ecommerce",
  // Note: If your bucket is created in any region other than US Standard, you will need to set the region key in the directive.
  region: "ap-southeast-1",

  acl: "public-read",

  authorize: function () {
    return true;
  },

  key: function (file) {
    var unique = Random.hexString(16);
    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    return user.emails[0].address + "previewImage" + "/" + unique + file.name
  }
});
