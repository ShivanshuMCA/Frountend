import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  visible: boolean = true;

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.visible = false; // Close the sidebar after navigation
  }

}
