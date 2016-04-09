## Meteor - Cookbook

- meteor create <app_name>
- cd <app_name>

- meteor remove insecure
- meteor remove autopublish

#### ESlint

- eslint --init

#### React

- meteor npm install --save react react-dom react-addons-pure-render-mixin
- meteor add react-meteor-data

#### Create File Structure

- rm client/main.js
- touch client/main.jsx
- mkdir -p imports/ui
- touch imports/ui/App.jsx
- mkdir imports/api

#### Account

- meteor add accounts-ui accounts-password
- touch imports/ui/AccountsUIWrapper.jsx
- mkdir imports/startup/
- touch imports/startup/accounts-config.js

#### Debug

- meteor add msavin:mongol

#### Testing

- meteor add practicalmeteor:mocha
