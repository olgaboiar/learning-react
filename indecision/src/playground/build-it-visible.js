class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={(this.handleToggleVisibility)}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>These are details</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
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