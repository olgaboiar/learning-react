console.log('App.js is running!');

//JSX
const app = {
    title: "Indecision App",
    subtitle: "there",
    options: []
};
const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
    console.log(option);
};
const remove = () => {
    app.options = [];
    renderApp();
};
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle ? app.subtitle : "No subtitle"}</p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <h4>{app.options.length > 0 ? "Here are your options" : "No options"}</h4>
            <p>{app.options.length}</p>
            <button onClick={(remove)}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();