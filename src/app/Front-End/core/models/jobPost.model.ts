export interface JobPost {
  _id: string;
  jobId: string;
  jobRoleTitle: string;
  jobType: string;
  platform: string;
  salary: string;
  experience: string;
  location: string;
  vacancy: string;
  postedOn: Date;
  applyByDate: Date;
  jobDescription: string; 
  status: string;
}
