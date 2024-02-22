import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isDuplicate:Boolean = false;
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }

  constructor(private _userService: UserService, private router: Router, private _messageservice: MessageService){}
  formSubmit(){
    console.log(this.user);
    this.verifyUsername();    
    this._userService.addUser(this.user).subscribe(
    (data:any)=>{
      console.log(data);
      this._messageservice.add({
        severity: 'success',
        summary: 'Succusfully registered',
        detail: 'User is registered for Id :' + data.id,
      });
      this.router.navigate(['login']); 
    },
    (error)=>{
      console.log(error);
      this._messageservice.add({
        severity: 'error',
        summary: 'Something went wrong',
      });
      }
    ); 
  }

  verifyUsername(){
    this._userService.verifyUser(this.user.username).subscribe((data:Boolean) =>{
      this.isDuplicate = data;
      if(this.isDuplicate){
        this.user.username ='';
      }
    });
  }
}
