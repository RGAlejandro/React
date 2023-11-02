



class Greeter {
    name = "unnamed";
    static greetWord = "Hello";

    constructor({ name }){
        this.name=name;
    }
    greet(){
        return `${Greeter.greetWord}, I'm ${this.name}`;
    }
}

class User extends Greeter {
    username = "";
    constructor({ name, surname}) {
        super({name});
        this.surname = surname;
    }
    greet(){
        return `${super.greet()} ${this.surname}`;
    } 
}

const user = new User({name: "Alejandro", surname: "Gemes"});
console.log(user.greet());
Greeter.greetWord = "Hola";
console.log(user.greet());