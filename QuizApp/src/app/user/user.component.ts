import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { StaffService } from '../service/staff.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent {
    user: any;
    order: any = {
        product: null,
        quantity: 0,
        slot: null,
    };

    products: any[] = [
        {
            name: 'Margherita Pizza',
            value: 'Margherita Pizza',
        },
        {
            name: 'Veggie Supreme Pizza',
            value: 'Veggie Supreme Pizza',
        },
        {
            name: 'Spaghetti Carbonara',
            value: 'Spaghetti Carbonara',
        },
        {
            name: 'Burger',
            value: 'Burger',
        },
        {
            name: 'Caesar Salad',
            value: 'Caesar Salada',
        },
        {
            name: 'Chicken Wings',
            value: 'Chicken Wings',
        },
        {
            name: 'Chocolate Cake',
            value: 'Chocolate Cake',
        },
    ];

    slots = [
        { label: 'Day', value: 'Day' },
        { label: 'Afternoon', value: 'Afternoon' },
        { label: 'Night', value: 'Night' },
    ];

    constructor(private _login: LoginService, private _orderService: StaffService) {}

    ngOnInit() {
        this.user = this._login.getUser();
    }
    submitOrder() {
        console.log(this.order);
        let dto = {
            product: this.order.product?.value,
            quantity: this.order?.quantity,
            slot: this.order.slot?.value,
            username: this.user?.username,
            firstName: this.user?.firstName,
            lastName: this.user?.lastName,
            email: this.user?.email,
            phone: this.user?.phone,
            status: 'PENDING',
        };

        this._orderService.addOrder(dto).subscribe((res:any) =>{
          console.log(res);
        });
    }
}
