import { Component, OnInit } from '@angular/core';

import { Person, Name, Age } from './person';
import { personWorker, personChangeName, personProgrammer} from './person-modified';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [Person, Name, Age]
})
export class PersonComponent implements OnInit {
  worker = personWorker();
  personChangeName = personChangeName();
  personProgrammer = personProgrammer();

  constructor(public person: Person) { }

  ngOnInit() {
  }

}
