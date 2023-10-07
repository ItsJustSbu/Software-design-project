import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarItems = [
    { title: "Dashboard", route: '/home' },
    { title: "Learners", route: '/learners' },
    { title: "Admin", route: '/admin' },
    { title: "Claims", route: '/claims' },
    { title: "Classes", route:'/classes'},
  ]
}
