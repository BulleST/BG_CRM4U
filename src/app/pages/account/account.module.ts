import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account.routing';
import { ToastrModule } from 'ngx-toastr';
import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AccountComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        ToastrModule,
        FormsModule,
    ],
    bootstrap: [AccountComponent],
})

export class AccountModule { }