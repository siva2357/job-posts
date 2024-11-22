import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { RecruiterMainPageComponent } from './recruiter-main-page.component';
import { JobPostPageComponent } from './create-job/job-post-page.component';

import { RecruiterPagesRoutingModule } from './recruiter-pages-routing.module';
import { LayoutModule } from '../../layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { ClosedJobPostPageComponent } from './closed-job-post-page/closed-job-post-page.component';
import { ManageJobComponent } from './manage-job/manage-job.component';
import { EditJobPostFormComponent } from './update-job/job-post-edit-form.component';

@NgModule({
  declarations: [
    RecruiterMainPageComponent,
    JobPostPageComponent,
    ClosedJobPostPageComponent,
    ManageJobComponent,
    EditJobPostFormComponent

  ],
  imports: [
    BrowserModule,
    RecruiterPagesRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule ,
  ],
  providers: [DatePipe],
  bootstrap: [RecruiterMainPageComponent]
})
export class RecruiterPageModule { }
