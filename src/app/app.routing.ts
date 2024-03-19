import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const list = () => import ('./pages/list/list.module').then(res => res.ListModule);
const account = () => import ('./pages/account/account.module'). then ( res => res.AccountModule)

const routes: Routes = [
    {
      path: '',
      loadChildren: list
    },
    {
      path: 'account',
      loadChildren: account
    },
  ]

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
                  
        exports: [RouterModule],
        
      })
      export class AppRoutingModule { }