import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ListComponent } from "./list.component";
import { ListRoutingModule } from "./list.routing";
import { RouterModule } from "@angular/router";


@NgModule ({
    declarations: [ 
        ListComponent,
    ],

    imports:[
        CommonModule,
        TableModule,
        TabViewModule,
        TagModule,
        ListRoutingModule,
        RouterModule,
    ]
})

export class ListModule {

    constructor(){
        console.log('estamos no list module')
    }
}
