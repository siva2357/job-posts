import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterMainPageComponent } from './recruiter-main-page.component';
import { JobPostPageComponent } from './create-job/job-post-page.component';
import { ClosedJobPostPageComponent } from './closed-job-post-page/closed-job-post-page.component';
import { ManageJobComponent } from './manage-job/manage-job.component';
import { EditJobPostFormComponent } from './update-job/job-post-edit-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'recruiter/main-page/create-jobPost', pathMatch: 'full' },
  {
    path: 'recruiter/main-page',
    component: RecruiterMainPageComponent,  // Main layout component with sidebar and router-outlet
    children: [
      { path: 'create-jobPost', component: JobPostPageComponent }, 
      { path: 'manage-job', component: ManageJobComponent },  // Loaded into <router-outlet>
      // Loaded into <router-outlet>
      { path: 'closed-jobPost', component: ClosedJobPostPageComponent },  // Loaded into <router-outlet>
      { path: 'view-jobPost/:id', component: EditJobPostFormComponent },  // Loaded into <router-outlet>

    ],
  },
];



@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RecruiterPagesRoutingModule { }
