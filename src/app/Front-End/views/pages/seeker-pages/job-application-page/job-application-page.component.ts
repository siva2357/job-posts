import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPost } from 'src/app/Front-End/core/models/jobPost.model';
import { JobPostService } from 'src/app/Front-End/core/services/jobPost.Service';

@Component({
  selector: 'app-job-application-page',
  templateUrl: './job-application-page.component.html',
  styleUrls: ['./job-application-page.component.css']
})
export class JobApplicationPageComponent {
  jobs: JobPost[] = []; 
  errorMessage!: string;
  loading: boolean = true; 
  selectedId: string | null = null;
  selectedJob: JobPost | null = null; // For storing the selected job details

  constructor( private jobService: JobPostService, private route: ActivatedRoute, private router: Router) {
    this.fetchJobs();
  }

  get hasJobPosts(): boolean {
    return this.jobs.length > 0;
  }

  
  fetchJobs() {
    this.jobService.getAllJobPosts().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.error('Error fetching job posts:', error);
        this.errorMessage = 'Failed to load job posts. Please try again later.';
      }
    );
  }



  
}
