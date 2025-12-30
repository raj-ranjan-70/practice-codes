class main {
    constructor(name) {
        console.log("This is constructor");
        this.name = name;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
};

class test {
    constructor() {
        const obj = new main("Raj");
        obj.greet();
    }   
}

new test();