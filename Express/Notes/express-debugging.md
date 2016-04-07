## Express - Debugging

#### Install Packages

```
sudo npm install -g node-inspector nodemon
```

#### Usage

Now, open two terminals.

In your first terminal, start nodemon in debug mode. This will open a default debugger port of 5858 for node-inspector to talk to behind the scenes:

```
nodemon --debug app.js
```

In your second terminal window, simply run:

```
node-inspector
```
