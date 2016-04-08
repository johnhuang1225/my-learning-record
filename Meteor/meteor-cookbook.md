## Meteor - Cookbook

#### Create an app

- meteor create <app_name>
- cd <app_name>
- meteor npm install
- meteor

> http://localhost:3000

#### React Setup

- meteor npm install --save react react-dom
- rm client/main.js
- touch client/main.jsx
- mkdir -p imports/ui
- touch imports/ui/App.jsx
- touch imports/ui/Task.jsx
- mkdir imports/api
- touch imports/api/tasks.js

#### Using data from a collection inside a React component

- meteor npm install --save react-addons-pure-render-mixin
- meteor add react-meteor-data
