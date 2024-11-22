import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterPageModule } from './Front-End/views/pages/recruiter-pages/recruiter-pages.module';
import { SeekerPageModule } from './Front-End/views/pages/seeker-pages/seeker-pages.module';
import { SweetAlertComponent } from './Front-End/views/shared/sweet-alerts/sweet-alert.component';

const routes: Routes = [
  {
    path: 'recruiter/main-page',
    component: RecruiterPageModule, 
  },
  {
    path: 'seeker/main-page',
    component: SeekerPageModule,
  },
  {
    path: 'alerts',
    component:  SweetAlertComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
