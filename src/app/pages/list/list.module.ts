import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListRoutingModule } from "./list.routing";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ListComponent } from "./list.component";



@NgModule ({
    declarations: [ 
        ListComponent,
    ],

    imports:[
        CommonModule,
        RouterModule,
        ListRoutingModule,
        TableModule,
        TabViewModule,
        TagModule,
      
        
      
        
    ],

})

export class ListModule {

    constructor(){
        console.log('estamos no list module')
    }
}
