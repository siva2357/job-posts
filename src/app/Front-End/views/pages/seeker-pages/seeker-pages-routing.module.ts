import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeekerMainPageComponent } from './seeker-main-page.component';
import { JobApplicationPageComponent } from './job-application-page/job-application-page.component';
import { AppliedJobPostPageComponent } from './applied-job-post-page/applied-job-post-page.component';
import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'seeker/main-page', pathMatch: 'full' },
  {
    path: 'seeker/main-page',
    component:  SeekerMainPageComponent,  // Main layout component with sidebar and router-outlet
    children: [
      { path: 'job-applications', component:  JobApplicationPageComponent },
      { path: 'applied-jobs', component: AppliedJobPostPageComponent },
      { path: 'job-details/:id', component: JobDetailsPageComponent },


    ],
  },
];



@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SeekerPagesRoutingModule { }
