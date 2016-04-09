## Meteor - Atom Setup

Install the following three Atom packages. Here’s how to install them from the terminal, but you can also select them from within Atom:

```js
apm install language-babel
apm install linter
apm install linter-eslint
```

#### Use with plugins

Install globaly `eslint` and plugins

```js
sudo npm i -g eslint babel-eslint eslint-config-airbnb eslint-plugin-react
```

Go to `Settings -> Packages`. Under `“linter-eslint”`, click the Settings button. To allow atom to see ESLint, you need to set `“Global Node Path”` to your Node path. As indicated in Atom, you can find this out with the following command in the terminal:

```
npm get prefix
```

This will return something like `/usr/local`. Add this to the `“Global Node Path”`, and check “Use Global Eslint”:

Then restart (or reload by pressing Ctrl+Alt+R / Cmd+Opt+R) Atom to activate linting.

#### Using ESLint

Note that recent versions of ESLint do not use any rules by-default. This means you have to specify a configuration file for your project!

To do this in a straightforward way run this:

```js
eslint --init
```
