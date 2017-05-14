import { ExamplePipesComponent } from './examplePipes.component';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myFilter'
})
export class MyFilter implements PipeTransform {
    public transform(arr: any[]): any {
        return arr.filter(e => e.id > 11);
        //console.log(arr[1].name);
    }
}