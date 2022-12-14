import {Animal} from "./models/Animal";
import {Cat} from "./models/Cat";
import {Dog} from "./models/Dog";
import {Parrot} from "./models/Parrot";
import {Meerkat} from "./models/Meerkat";

class Zoo {
    private _animals: Array<Animal> = new Array<Animal>(); //original code: private _animals: Array <object> = new Array<object>()

    public addAnimal(animal: Animal) { // original code: public addAnmial(animal; Object)
        this._animals.push(animal);
    }

    get animals(): Array<Animal> { //original code: get animals()= Array<object>
        return this._animals;
    }

}

let zoo = new Zoo;
zoo.addAnimal(new Cat('Cat','miauw'));
zoo.addAnimal(new Dog('Dog','woof'));
zoo.addAnimal(new Parrot('Parrot',"i'm a pirate"));
zoo.addAnimal(new Meerkat('Meerkat','pumba why u do this'));
zoo.animals.forEach((animal: Animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.sound + "<br>");
});
