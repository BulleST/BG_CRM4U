import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list.component";
import { CreateComponent } from "./create/create.component";



const routes: Routes = [
    {
        path: '', component: ListComponent, children: [
            { path: 'cadastrar', component: CreateComponent },
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListRoutingModule {}
