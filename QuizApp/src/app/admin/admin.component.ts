import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
    visible: boolean = true;
    viewname: any = 'Staff';

    constructor(private router: Router) {}

    navigateTo(route: string) {
        this.router.navigateByUrl(route);
        this.visible = false; // Close the sidebar after navigation
    }

    setView(type: any) {
      console.log(type);
      
        this.viewname = type;
    }
}
