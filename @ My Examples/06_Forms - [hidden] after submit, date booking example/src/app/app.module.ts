import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component/my.component';
import { ExamplePipesComponent } from './example-pipes.component/example-pipes.component';
import { MyFilter } from "./example-pipes.component/my-filter.pape"
import { DataBinding } from './data-binding.component/data-binding.component'
import { HeroFormComponent } from './forms.example/form.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ExamplePipesComponent,
    MyFilter,
    DataBinding,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
