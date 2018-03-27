// Modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main',  component: MainComponent },
  { path: '**', redirectTo: '/login' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}