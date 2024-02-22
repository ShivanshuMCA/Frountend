import { Component } from '@angular/core';
import { StaffService } from 'src/app/service/staff.service';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
    staff: any[] = []; // Placeholder for staff member data
    displayDialog: boolean = false;
    staffMember: any = {}; // Placeholder for the staff member being added or edited

    shifts = [
        { label: 'Day', value: 'Day' },
        { label: 'Afternoon', value: 'Afternoon' },
        { label: 'Night', value: 'Night' },
    ];
    constructor(private _staffService: StaffService) {}

    ngOnInit(): void {
        // Load staff data here, for example, from a service
        this.getStaff();
    }

    getStaff() {
        this._staffService.getAllStaff().subscribe((res: any) => {
            this.staff = res;
        });
    }

    showEditDialog(staffMember: any): void {
        this.staffMember = { ...staffMember };
        this.displayDialog = true;
    }

    confirmDelete(staffId: number): void {
        console.log('Delete staff member with ID:', staffId);
        this._staffService.deleteStaff(staffId).subscribe(
            (data) => {
                console.log('Staff deleted successfully');
                this.getStaff();
            },
            (error) => console.log(error)
        );
    }

    saveStaff(): void {
        this.staffMember.shiftId = this.staffMember.shift?.value;
        let dto = {
            id: this.staffMember?.id,
            shift: this.staffMember.shift?.value,
            firstName: this.staffMember.firstName,
            lastName: this.staffMember.lastName,
            email: this.staffMember.email,
            phone: null,
        };

        console.log(dto);

        this._staffService.saveStaff(dto).subscribe((res: any) => {
            this.getStaff();
            this.staffMember = {};
            this.displayDialog = false;
        });
    }

    addStaff() {
        this.staffMember = {};
        this.displayDialog = true;
    }
}
