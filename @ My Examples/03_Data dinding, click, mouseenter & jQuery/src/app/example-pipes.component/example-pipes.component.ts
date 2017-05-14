import { Component } from '@angular/core';

let arr = [
    {name: "Ivancho", id: 10},
    {name: "Dancho", id: 15},
    {name: "Kaloiancho", id: 20}
];

@Component({
    selector: 'example-pipes-component',
    templateUrl: './example-pipesComponent.html',
    styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipesComponent {
       pipeDate = Date();
       arr = arr;
}