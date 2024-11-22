import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { JobPostService } from 'src/app/Front-End/core/services/jobPost.Service';
import { JobPost } from 'src/app/Front-End/core/models/jobPost.model';
import { AlertService } from 'src/app/Front-End/core/services/alerts.service';
@Component({
  selector: 'app-job-post-page',
  templateUrl: './job-post-page.component.html',
  styleUrls: ['./job-post-page.component.css'],
})
export class JobPostPageComponent  implements OnInit {
  jobPostForm!: FormGroup; 
  errorMessage: string = '';
  jobCreated:boolean=false;
  isLoading:boolean=false;
  isSubmitting:boolean=false;
  editorContent: any; 

  @Input() jobPost!: JobPost; // Input property to receive job post data

  constructor(private fb: FormBuilder, private jobPostService: JobPostService, private alert:AlertService ) {}

  ngOnInit(): void{

    this.initializeForm();
  }

  initializeForm() {
    this.jobPostForm = this.fb.group({
      _id: [null],
      jobId: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)]], // Only numbers, 6 digits
      jobRoleTitle: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-\/]+$/)]], // Only letters, spaces, and symbols like - or /
      jobType: ['', Validators.required], // No specific pattern, just required
      platform: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]], // Only letters, spaces, and symbols like - or /
      salary: ['', [Validators.required]], // Only numbers
      experience: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], // Only numbers
      location: ['', [Validators.required]], // Only letters, spaces, and symbols like - or /
      vacancy: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], // Only numbers
      applyByDate: ['', Validators.required],
      jobDescription: ['', [Validators.required, ]], // Letters, numbers, spaces, and symbols like - or /
      status: ['active']
    });
  }

  submitJobPost() {
    if (this.jobPostForm.valid) {
      const jobPostData: JobPost = { ...this.jobPostForm.value, status: this.jobPostForm.value.status || 'active' };
      this.isLoading = true;
      this.jobPostService.createJobPost(jobPostData).subscribe({
        next: (newJobPost: JobPost) => {
          setTimeout(() => {
            this.isLoading = false; 
            this.alert. showJobCreatedSuccess(); 
            this.jobPostForm.reset({
              salary: '',
              jobType:'', 
            });

          }, 2000);
        },
        error: () => {
          this.isLoading = false;
          this.alert.showErrorJobCreating();
        }
      });
    } else {
      this.alert.showJobFieildsError();
    }
  }
}
