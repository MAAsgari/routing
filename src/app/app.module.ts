import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { HomeComponent } from './home.component';

import { AppRoutingModule } from './app-routing.module';

import { UserDetailGuard } from './user/user-detail.guard';
import { UserEditGuard } from './user/user-edit.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserDetailGuard,
    UserEditGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
