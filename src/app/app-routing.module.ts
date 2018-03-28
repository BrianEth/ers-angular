// Modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
import { ResolvedComponent } from './components/resolved/resolved.component';
import { PendingComponent } from './components/pending/pending.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main',  component: MainComponent },
  { path: 'submit', component: SubmitComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'resolved', component: ResolvedComponent},
  { path: 'pending', component: PendingComponent},
  
  { path: '**', redirectTo: '/login' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
