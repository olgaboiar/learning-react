console.log('App.js is running!')

//JSX
var template = (
    <div>
        <h1>MY app!</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
var templateTwo = (
    <div>
        <h1>Olga B</h1>
        <p>Age: 33</p>
        <p>Location: NYC</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);