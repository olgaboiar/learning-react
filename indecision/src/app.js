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

const user = {
    // name: "Jess",
    age: 14
    // location: "Kyiv"
};
let userName = "Mike";
let userAge = 29;
let userLocation = "DC";
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonym"}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);