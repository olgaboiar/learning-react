'use strict';

console.log('App.js is running!');

//JSX
var template = React.createElement(
  'h1',
  null,
  'MY app!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
