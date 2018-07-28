const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(56, 1, 6));
const user = {
    name: "Andrew",
    cities: ["Phily", "NYC", "DC"],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + "live " + city;
        // });
        // this.cities.forEach((city) => {
        //     console.log(this.name + "lived" + city);
        // });
        return this.cities.map((city) => this.name + 'lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4],
    multBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multBy);
    }
};

console.log(multiplier.multiply());