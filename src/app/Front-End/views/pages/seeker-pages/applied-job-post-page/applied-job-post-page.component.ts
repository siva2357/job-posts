import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobPost } from 'src/app/Front-End/core/models/jobPost.model';
import { JobPostService } from 'src/app/Front-End/core/services/jobPost.Service';

@Component({
  selector: 'app-applied-job-post-page',
  templateUrl: './applied-job-post-page.component.html',
  styleUrls: ['./applied-job-post-page.component.css']
})
export class AppliedJobPostPageComponent {

  loading: boolean = true; 
  jobs: JobPost[] = []; 
  errorMessage!: string;

  constructor( private jobService: JobPostService, private route: ActivatedRoute) {
    this.fetchJobs();
  }

  get hasJobPosts(): boolean {
    return this.jobs.length > 0;
  }

  fetchJobs() {
    this.loading = true;
    this.jobService.getAppliedJobPosts().subscribe(
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



}
