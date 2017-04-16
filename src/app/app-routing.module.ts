import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserRoute } from './user/user-routing';

const ROURES: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id', component: UserComponent, children: UserRoute },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/user/11', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROURES)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }





