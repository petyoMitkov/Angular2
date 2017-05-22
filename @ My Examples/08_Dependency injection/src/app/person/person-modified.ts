import { Person, Name, Age } from './person';


export function personWorker() {
    let person = new Person(new Name(), new Age());
    person.occupation = "Worker";
    return person;
}

/////////////////////////////////

class Name2 {
    constructor(public name: string) { }
}
export function personChangeName() {
    let n = "Marto";
    let person = new Person(new Name2(n), new Age());
    person.occupation = "Traveler";
    return person; 
}

/////////////////////////////////

class Programmer extends Name { name = "Petyo Mitkov"; }
class ProgrammerAge extends Age { age = 32; }

export function personProgrammer() {
    let person = new Person(new Programmer(), new ProgrammerAge());
    person.occupation = "Super cool programmer who use DI."
    return person;
}