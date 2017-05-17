import { Component } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
    selector: 'data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls:['./data-binding.component.css']
})

export class DataBinding {
    title = "Old Book Titlew";

    onClick() {
        document.getElementById("displayInfo").innerHTML = 
        "Button 1 was clicked!";
    }
    onMouseEnter() {
        $("#displayInfo").text("(mouseenter) function works");
        console.log(event);
    }
    testJquery() {
        $("#displayInfo").text("jQuery works on Angular2");
        console.log(event);
    }
    rename() {
        let newName = $("#rename").val();
        $("#newName").text(newName);
    }
    
    //Data Binding Section 2
    values = '';
    onKey(event: any) {  //with type info 
        this.values += event.target.value + ' | ';
        console.log(event);
    }

    //Tow-way data binding
    towWayData = "";

}