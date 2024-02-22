import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    CheckboxModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ToastModule,
  ],
  providers: [MessageService]

})
export class LoginModule { }
