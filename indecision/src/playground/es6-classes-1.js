class Person {
    constructor(name = 'Vasya', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;   
    }
}
class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let description = super.getGreeting();
        if (this.hasHomeLocation()) {
            description += ` Visiting from ${this.homeLocation}`;
        }
        return description;   
    }
}
const me = new Traveller('Olga B', 33, 'NYC');
console.log(me);
const other = new Student('Vanya', 30, 'CS');
console.log(me.age);
console.log(me.getGreeting());
console.log(other.getDescription());