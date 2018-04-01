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

//auth

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './components/auth/noop.interceptor';
import { AllPendingComponent } from './components/all-pending/all-pending.component';
import { AllResolvedComponent } from './components/all-resolved/all-resolved.component';
import { RegisterComponent } from './components/register/register.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';

//import { NoopInterceptor } from '@angular/common/http';

//import { AuthInterceptor } from './service/auth.service';


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
   // NoopInterceptor,
    ProfileComponent,
   AllPendingComponent,
   AllResolvedComponent,
   RegisterComponent,
   AllEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  
  providers: [LoginService, ReimbursementService, EmployeeService, { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
