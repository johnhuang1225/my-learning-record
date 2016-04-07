import {uploadToAmazonS3} from "../../../modules/upload-to-amazon.js";

Template.uploader.events({
  'change input[type="file"]' (event, template){
    uploadToAmazonS3({ event: event, template: template });
  }
})
