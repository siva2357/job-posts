import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/Front-End/core/models/menu.model';

@Component({
  selector: 'app-recruiter-main-page',
  templateUrl: './recruiter-main-page.component.html',
  styleUrls: ['./recruiter-main-page.component.css']
})
export class RecruiterMainPageComponent implements OnInit{

  constructor() { }
  ngOnInit(): void {
    
  }
  menu: MenuItem[] = [
    { label: 'Create Job', link: '/recruiter/main-page/create-jobPost', icon: 'bi bi-suitcase-lg' },
    { label: 'Manage Job', link: '/recruiter/main-page/manage-job', icon: 'bi bi-archive' },
    { label: 'Closed Job', link: '/recruiter/main-page/closed-jobPost', icon: 'bi bi-archive' },


  ];
  

  sidebarOpen: boolean = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
