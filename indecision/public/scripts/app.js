"use strict";

var app = {
    title: "Visibility Toggle",
    details: ""
};
var appRoot = document.getElementById('app');

var show = function show() {
    app.details = "hey, these are some details you can see!";
    renderApp();
};
var hide = function hide() {
    app.details = "";
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
        app.details.length > 0 ? React.createElement(
            "button",
            { onClick: hide },
            "Hide details"
        ) : React.createElement(
            "button",
            { onClick: show },
            "Show details"
        ),
        app.details && React.createElement(
            "p",
            null,
            app.details
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
