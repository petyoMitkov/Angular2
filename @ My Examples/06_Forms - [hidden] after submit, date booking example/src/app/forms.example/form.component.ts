import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'form-example',
    templateUrl: './form.component.html',
    styleUrls: ['./form.css']
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new Hero(20, 'Dr IQ', this.powers[0], 'Chuck Noris' );

    submitted = false;

    onSubmit() { this.submitted = true; }

    newHero() {
        this.model = new Hero(42, "", "");
    }
    //TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    input1 = "";
    input2 = "";
}
