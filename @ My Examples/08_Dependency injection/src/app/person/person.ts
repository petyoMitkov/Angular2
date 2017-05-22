import {Injectable } from '@angular/core';

export class Name {
    public name = "Joro";
}

export class Age {
    //public age: string;
    public age = 21;
}

@Injectable()
export class Person {
    public occupation = "student";

    constructor(public name: Name, public age: Age) {  }

    printPerson() {
        return `${this.name.name} age: ${this.age.age} occupation: ${this.occupation}.`;
    }
}