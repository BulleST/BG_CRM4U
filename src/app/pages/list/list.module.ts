import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ListComponent } from "./list.component";
import { ListRoutingModule } from "./list.routing";


@NgModule ({
    declarations: [ 
        ListComponent,
    ],

    imports:[
        CommonModule,
        ListRoutingModule,
        TableModule,
        TabViewModule,
        TagModule
   
    ]
})

export class ListModule {

    constructor(){
        console.log('estamos no list module')
    }
}
