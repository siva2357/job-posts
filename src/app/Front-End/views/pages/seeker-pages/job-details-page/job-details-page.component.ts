import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobPost } from 'src/app/Front-End/core/models/jobPost.model';
import { AlertService } from 'src/app/Front-End/core/services/alerts.service';
import { JobPostService } from 'src/app/Front-End/core/services/jobPost.Service';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent {
  @Input() job!: JobPost ;
  @Output() jobApplied = new EventEmitter<string>();
  errorMessage!: string;
  jobPostId!: string;
  isLoading:boolean=false;
  isApplied:boolean=false;

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param: Params) => {
      this.jobPostId = param['get']('id');
    });

    this.jobService.getJobPostById(this.jobPostId).subscribe(
      (jobData: JobPost) => {
        this.job = jobData;
        console.log('Job data:', this.job); // Debugging the fetched data
      },
      (error) => {
        console.error('Failed to fetch job post:', error);
        this.errorMessage = 'Failed to load job post data';
      }
    );
  }

  constructor( private jobService: JobPostService, private activatedRouter: ActivatedRoute, private router: Router,  private alert:AlertService) {}

  goBack(){
    this.router.navigateByUrl(`/seeker/main-page/job-applications`);
  }

  async confirmApply(job: JobPost) {
    if (!job || !job._id) {
      console.error('Job data is not available');
      return;
    }
    try {
      const userConfirmed = await this.alert.showJobConfirmApply(); 
      if (userConfirmed) {
        this.jobService.applyJobPostById(this.job!._id, this.job!).subscribe(
          () => {
            this.jobApplied.emit(job._id);
            this.alert.showJobAppliedSuccess(); 

            this.isApplied = true; 
            console.log('Job applied successfully! isApplied:', this.isApplied); // Debugging

          },
          (error) => {
            this.handleError(error, 'close job post');
          }
        );
      }
    } catch (error) {
      console.error('Error during job close confirmation:', error);
    }

  }


  
  private handleError(error: any, action: string) {
    console.error(`Error ${action}:`, error);
    alert(`Failed to ${action}. Please try again later.`);
  }

  
}
