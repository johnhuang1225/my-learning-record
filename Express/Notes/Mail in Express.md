## Mail in Expess

We will use [nodemailer](https://github.com/nodemailer/nodemailer)

#### Install package

```js
npm install --save nodemailer
```

#### Create credentials

```js
module.exports = {
  cookieSecret: 'your cookie secret goes here',
  gmail: {
    user: 'your gmail username',
    password: 'your gmail password',
  }
};
```

#### Set up

```js
var nodemailer = require('nodemailer');
var credentials = require('./credentials.js');

var mailTransport = nodemailer.createTransport('SMTP',{
  service: 'Gmail',
  auth: {
    user: credentials.gmail.user,
    pass: credentials.gmail.password,
  }
});
```

#### Sending Mail

```js
mailTransport.sendMail({
  from: '',
  to: '',
  subject: '',
  text: '',
}, function(err){
  if(err) console.error( 'Unable to send email: ' + error );
});
```
