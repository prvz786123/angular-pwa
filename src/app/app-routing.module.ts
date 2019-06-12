import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component"
import { NewUserComponent } from "./components/new-user/new-user.component";
import { RegisteredUsersComponent } from "./components/registered-users/registered-users.component"


const routes: Routes = [
  {path:"registered-users", component:RegisteredUsersComponent},
  {path:"new-user", component:NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
