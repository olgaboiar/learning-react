"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility(props) {
        _classCallCheck(this, Visibility);

        var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(Visibility, [{
        key: "handleToggleVisibility",
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleToggleVisibility },
                    this.state.visibility ? "Hide details" : "Show details"
                ),
                this.state.visibility && React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        "These are details"
                    )
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));
// const app = {
//     title: "Visibility Toggle",
//     details: ""
// };
// const appRoot = document.getElementById('app');

// const show = () => {
//     app.details = "hey, these are some details you can see!";
//     renderApp();
// };
// const hide = () => {
//     app.details = "";
//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.details.length > 0 ? <button onClick={(hide)}>Hide details</button> : <button onClick={(show)}>Show details</button>}
//             {app.details && <p>{app.details}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderApp();
