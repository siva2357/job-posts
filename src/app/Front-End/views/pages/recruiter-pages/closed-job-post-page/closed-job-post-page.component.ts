import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobPost } from 'src/app/Front-End/core/models/jobPost.model';
import { JobPostService } from 'src/app/Front-End/core/services/jobPost.Service';

@Component({
  selector: 'app-closed-job-post-page',
  templateUrl: './closed-job-post-page.component.html',
  styleUrls: ['./closed-job-post-page.component.css']
})
export class ClosedJobPostPageComponent {
  jobs: JobPost[] = [];
  loading: boolean = true;
  errorMessage!: string;

  constructor(private jobService: JobPostService, private route: ActivatedRoute) {
    this.fetchJobs();
  }

  get hasJobPosts(): boolean {
    return this.jobs.length > 0;
  }

  fetchJobs() {
    this.loading = true;
    this.jobService.getClosedJobPosts().subscribe(
      (data) => {
        this.jobs = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching job posts:', error);
        this.loading = false;
        this.errorMessage = 'Failed to load job posts. Please try again later.';
      }
    );
  }


  onJobReopened(id: string) {
    this.jobs = this.jobs.filter(job => job._id !== id);
  }

  
  // Handle job deletion event
  onJobDeleted(id: string) {
    this.jobs = this.jobs.filter(job => job._id !== id);
  }




}
