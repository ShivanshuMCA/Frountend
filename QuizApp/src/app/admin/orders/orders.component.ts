import { Component } from '@angular/core';
import { StaffService } from 'src/app/service/staff.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
    orders: any[] = []; // Populate this array with your orders
    orderDialogVisible: boolean = false;
    selectedOrder: any = {}; // The order to add or edit
    statuses: any[] = [
        { label: 'PENDING', value: 'PENDING' },
        { label: 'PROCESS', value: 'PROCESS' },
        { label: 'COMPLETED', value: 'COMPLETED' },
    ]; // Example statuses

    avaliableStaff:boolean = false;
    avalibStaff:any[] =[];
    constructor(private _orderService :StaffService) {}

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders(){
        this._orderService.getAllOrder().subscribe((res:any)=>{
            this.orders = res
        });
    }

    showEditDialog(order: any) {
        this.selectedOrder = { ...order };
        this.orderDialogVisible = true;
    }

    saveOrder() {
        this.orderDialogVisible = false;
        this._orderService.addOrder(this.selectedOrder).subscribe((res:any)=>{
            this.getOrders();
        });        
    }

    deleteOrder(order: any) {
        // Implement order deletion logic here
    }

    viewStaff(shift:any){
        this.avaliableStaff = true;
        this._orderService.getStaffByShift(shift).subscribe((res:any)=>{
            this.avalibStaff = res;
        });
    }

    closeOrder(){
        this.avaliableStaff = false;
        this.avalibStaff = [];
    }
}
