import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

//Routing Example
import { Routes, RouterModule }  from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path:"", redirectTo: "home", pathMatch: "full" },
  { path:"home", component: UsersComponent },
  { path:"users", component: UserComponent
  //,children: [
   // { path:"user", component: UserComponent },
  //]
},
  { path:"**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
