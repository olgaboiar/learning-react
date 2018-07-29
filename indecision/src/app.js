console.log('App.js is running!');

//JSX
const app = {
    title: "Indecision App",
    subtitle: "there",
    options: []
};
const appRoot = document.getElementById('app');
const numbers = [55,101,100];

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
const onMakeDecision = () => {
    const randonNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randonNum];
    console.log(randonNum);
    alert(option);
    renderApp();
};
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle ? app.subtitle : "No subtitle"}</p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <h4>{app.options.length > 0 ? "Here are your options" : "No options"}</h4>
            <button disabled={app.options.length === 0} onClick={(onMakeDecision)}>What Shoul I do?</button>
            <button onClick={(remove)}>Remove All</button>
            {/*
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })*/
            }
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>
                    })
                }
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