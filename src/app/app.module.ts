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
import { SubmitComponent } from './components/submit/submit.component';
import { HistoryComponent } from './components/history/history.component';
import { PendingComponent } from './components/pending/pending.component';
import { ResolvedComponent } from './components/resolved/resolved.component';
import { ProfileComponent } from './components/profile/profile.component';


//services
import { LoginService } from './service/login.service';
import { ReimbursementService } from './service/reimbursement.service';
import { EmployeeService } from './service/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    SubmitComponent,
    HistoryComponent,
    PendingComponent,
    ResolvedComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, ReimbursementService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
