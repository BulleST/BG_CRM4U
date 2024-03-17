import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListRoutingModule } from "./list.routing";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ListComponent } from "./list.component";
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CreateComponent } from "./create/create.component";
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';



@NgModule ({
    declarations: [ 
        ListComponent,
        CreateComponent
    ],

    imports:[
        CommonModule,
        RouterModule,
        ListRoutingModule,
        TableModule,
        TabViewModule,
        TagModule,
        ToggleButtonModule,
        ToolbarModule,
        ButtonModule,
        FormsModule, 
        DropdownModule
      
        
      
        
    ],

})

export class ListModule {

    constructor(){
        console.log('estamos no list module')
    }
}
