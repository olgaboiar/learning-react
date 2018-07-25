'use strict';

console.log('App.js is running!');

//JSX
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'MY app!'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Olga B'
    ),
    React.createElement(
        'p',
        null,
        'Age: 33'
    ),
    React.createElement(
        'p',
        null,
        'Location: NYC'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
