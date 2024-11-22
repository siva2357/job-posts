import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'; 
import { Notification } from 'src/app/Front-End/core/models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notifications: Notification[] = [];
  @Input() userRole: string = '';  // Role from parent component (seeker/recruiter)
  @Output() markAllRead = new EventEmitter<void>();


  allExpanded: boolean = false;

  // Helper method to determine the number of unread notifications
  get notificationCount(): number {
    return this.notifications.filter((n) => !n.read).length;
  }

  constructor() {}

  ngOnInit() {
    this.fetchNotifications();  // Fetch notifications based on user role
  }

  // Simulate fetching notifications
  fetchNotifications() {
    const allNotifications: Notification[] = [
      { message: 'New job posted in your category', role: 'seeker', read: false, timestamp: new Date(), expanded: false },
      { message: 'Seeker 1 has applied for job post - JobID: 123456', role: 'recruiter', read: false, timestamp: new Date(), expanded: false },
      { message: 'Seeker 2 has withdrawn from job post - JobID: 789101', role: 'recruiter', read: false, timestamp: new Date(), expanded: false },
      { message: 'You have been selected for an interview', role: 'seeker', read: false, timestamp: new Date(), expanded: false }
    ];

    // Filter notifications based on the selected user role (recruiter/seeker)
    this.notifications = allNotifications.filter(notification => notification.role === this.userRole);
  }

  // Mark all notifications as read
  markAsRead() {
    this.notifications.forEach(notification => notification.read = true);
    this.markAllRead.emit();
  }

  toggleExpand(item: any) {
    item.expanded = !item.expanded; // Toggle the expanded state for individual notification
  }

  // Toggle the expanded state for all notifications
  expandAllNotifications() {
    this.allExpanded = !this.allExpanded;
    this.notifications.forEach(item => item.expanded = this.allExpanded); // Toggle the expanded state for all notifications
  }

  hasExpandableNotifications(): boolean {
    return this.notifications.some(item => item.message.length > 50); // Check if any message can be expanded
  }
}
