//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Routing
import { AppRoutingModule }  from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';


//services
import { ErsService } from './service/ers.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ErsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
