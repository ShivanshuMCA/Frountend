import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { StaffComponent } from './staff/staff.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [
        AdminComponent,
        SidebarComponent,
        StaffComponent,
        OrdersComponent,
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SidebarModule,
        ButtonModule,
        TableModule,
        DialogModule,
        DialogModule,
        FormsModule,
        DropdownModule,
        CardModule
    ],
})
export class AdminModule {}
