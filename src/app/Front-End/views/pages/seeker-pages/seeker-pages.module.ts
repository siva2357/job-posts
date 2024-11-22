import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SeekerPagesRoutingModule } from './seeker-pages-routing.module';
import { SeekerMainPageComponent } from './seeker-main-page.component';
import { LayoutModule } from '../../layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { JobApplicationPageComponent } from './job-application-page/job-application-page.component';
import { AppliedJobPostPageComponent } from './applied-job-post-page/applied-job-post-page.component';
import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';
@NgModule({
  declarations: [
    SeekerMainPageComponent,
    JobApplicationPageComponent,
    AppliedJobPostPageComponent,
    JobDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    SeekerPagesRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    SharedModule

  ],
  providers: [DatePipe],
  bootstrap: [SeekerMainPageComponent]
})
export class SeekerPageModule { }
