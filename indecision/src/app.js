console.log('App.js is running!');

//JSX
const app = {
    title: "Indecision App",
    subtitle: "there",
    options: ["one", "two"]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle ? app.subtitle : "No subtitle"}</p>
        {app.subtitle && <p>{app.subtitle}</p>}
        <h4>{app.options.length > 0 ? "Here are your options" : "No options"}</h4>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0
const addOne = () => {
    console.log("addOne");
};
const minusOne = () => {
    console.log("minusOne");
};
const reset = () => {
    console.log("reset");
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={(addOne)}>+1</button>
        <button onClick={(minusOne)}>-1</button>
        <button onClick={(reset)}>Reset</button>
    </div>
);
console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);