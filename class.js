



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

}