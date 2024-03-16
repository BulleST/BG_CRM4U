import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const list = () => import ('./pages/list/list.module').then(res => res.ListModule);

const routes: Routes = [
    {
      path: '',
      loadChildren: list
    },]

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
                  
        exports: [RouterModule],
        
      })
      export class AppRoutingModule { }