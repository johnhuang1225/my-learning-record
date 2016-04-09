## Meteor - Cookbook

- meteor create <app_name>
- cd <app_name>

#### NPM

- npm install --save react react-dom react-addons-pure-render-mixin

#### Atmosphere

> .meteor/packages

```
twbs:bootstrap
fortawesome:fontawesome
momentjs:moment
# react
react-meteor-data
# account
accounts-ui
accounts-password
# route
kadira:flow-router
# debug
msavin:mongol
# test
practicalmeteor:mocha
```

#### ESlint

- eslint --init

#### Routing

- npm install --save react-router
- mkdir -p imports/startup/client/
- touch imports/startup/client/routes.js

#### file Structure

- rm client/main.js
- touch client/main.jsx
- mkdir public

#### api

- mkdir imports/api

#### publications

- mkdir -p imports/api/<collection>/server/
- touch imports/api/<collection>/server/publications.js

#### Components

- mkdir -p imports/ui/components/
- mkdir -p imports/ui/components/layouts/
- touch imports/ui/App.jsx

#### accout

- touch imports/ui/AccountsUIWrapper.jsx
- mkdir imports/startup/
- touch imports/startup/accounts-config.js
