"use strict";

console.log('App.js is running!');

//JSX
var app = {
    title: "Indecision App",
    subtitle: "there",
    options: []
};
var appRoot = document.getElementById('app');

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
    console.log(option);
};
var remove = function remove() {
    app.options = [];
    renderApp();
};
var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "p",
            null,
            app.subtitle ? app.subtitle : "No subtitle"
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "h4",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: remove },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "Item One"
            ),
            React.createElement(
                "li",
                null,
                "Item Two"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
