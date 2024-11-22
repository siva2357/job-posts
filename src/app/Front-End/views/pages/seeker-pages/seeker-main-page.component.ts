import { Component } from '@angular/core';
import { MenuItem } from 'src/app/Front-End/core/models/menu.model';

@Component({
  selector: 'app-seeker-main-page',
  templateUrl: './seeker-main-page.component.html',
  styleUrls: ['./seeker-main-page.component.css'],
})
export class SeekerMainPageComponent {

  constructor() { }

  menu:MenuItem[]=[
    { label: 'job-applications', link: '/seeker/main-page/job-applications', icon: 'bi bi-suitcase-lg' },
    { label: 'applied-jobs', link: '/seeker/main-page/applied-jobs', icon: 'bi bi-suitcase-lg' },

  ];

  sidebarOpen: boolean = true;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  
}
