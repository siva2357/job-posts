export interface Notification {
    message: string;
    role: 'recruiter' | 'seeker';
    read: boolean;
    timestamp: Date;
    expanded: boolean; 
  }