import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { JobPost } from 'src/app/Front-End/core/models/jobPost.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent {
  @Input() job!: JobPost; // Receive job data from parent
  @Output() viewJobDetails= new EventEmitter<JobPost>();

  constructor(private router: Router) {}

  viewDetails(job: JobPost) {
    if (!job || !job._id) {
      console.error('Job ID is missing or invalid');
      return;
    }
    this.viewJobDetails.emit(job);
    this.router.navigateByUrl(`/seeker/main-page/job-details/${job._id}`)
  }
}
