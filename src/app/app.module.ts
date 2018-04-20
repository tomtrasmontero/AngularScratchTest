import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainPageService } from './main-page/main-page.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersComponent,
    DepartmentsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
