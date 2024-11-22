import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'src/app/Front-End/core/models/notification.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  notificationsList: Notification[] = []; // define this as an array of notifications
  notificationCount: number = 0; // holds the number of unread notifications
  showJobPostForm: boolean = true;

  @Input() sidebarOpen: boolean = true; // Receives sidebar state
  @Output() toggleSidebar = new EventEmitter<void>(); // Emits toggle event

  toggle() {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggleSidebar.emit(); // Emit event to parent to toggle sidebar
  }

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.notificationCount = this.notificationsList.filter(notification => !notification.read).length;
  }

  // Handle "Mark all as read"
  markAsRead(): void {
    this.notificationsList.forEach(notification => {
      notification.read = true;
    });
    this.notificationCount = 0; // Reset unread count
  }

  // Toggle expanded state of notification
  toggleExpand(notification: Notification): void {
    notification.expanded = !notification.expanded;
  }


 
}
