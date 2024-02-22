import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { LoginService } from '../service/login.service';
import { StaffService } from '../service/staff.service';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DropdownModule,
    CalendarModule,
    FormsModule
  ],
  providers:[LoginService, StaffService]
})
export class UserModule { }
