
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';
import { NotificationComponent } from './notifications/notification.component';
import { JobTableComponent } from './job-table/job-table.component';


@NgModule({
  declarations: [
    JobCardComponent,
    NotificationComponent,
    JobTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule ,
    ReactiveFormsModule,
    FormsModule,
  ],
 exports: [
    JobCardComponent,
    NotificationComponent,
    JobTableComponent,

  ],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
