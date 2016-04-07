import { Slingshot } from 'meteor/edgee:slingshot';
import { Bert } from 'meteor/themeteorchef:bert';

var template;

function _getFileFromInput(event) {
  return event.target.files[0];
}

var _setPlaceHolderText = (string = "Choose a File to upload") => {
  template.find(".alert span").innerText = string;
}

var _uploadFileToAmazon = (file) => {
  const uploader = new Slingshot.Upload("uploadFileToAmazon");

  uploader.send(file, function (error, downloadUrl) {
    if (error) {
      Bert.alert(error.message, "warinng");
      _setPlaceHolderText();
    }
    else {
      // ....
    }
  });
}

var upload = (options) => {
  template = options.template;
  let file = _getFileFromInput(option.event);

  _setPlaceHolderText(`Uploading ${file.name}`)
  _uploadFileToAmazon(file);
}

module.exports = upload
