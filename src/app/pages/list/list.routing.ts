import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list.component";
import { CreateComponent } from "./create/create.component";
import { DeleteComponent } from "./delete/delete.component";
import { CreateConfirmComponent } from "./create-confirm/create-confirm.component";



const routes: Routes = [
    {
        path: '', component: ListComponent, children: [
            { path: 'cadastrar', component: CreateComponent, children: [
               { path: 'confirmar-cadastro/:id', component: CreateConfirmComponent } 
            ]},
            { path: 'excluir/:id', component: DeleteComponent },
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListRoutingModule {}
