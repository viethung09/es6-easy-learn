# Quick setup babel with npm
Require install nodejs via npm first.

```sh
$ npm i babel --save-dev
$ npm i babelify --save-dev
```
Now let make `package.json` file:
```json
{
  "name": "es6Test",
  "version": "0.1.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "budo index.js --live"
  },
  "author": "Do Viet Hung <viethung097@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "babel": "^6.5.2"
  },
  "browserify": {
    "transform": ["babelify"]
  }
}
```
The `transform` key make browser to transform es6 code to the regular js version.
If you got error like that
```sh
sh: budo: command not found
```
Then install budo package.
```sh
sudo npm install budo -g
```
This command will install budo package globally.
More info about budo www.npmjs.com/package/budo
