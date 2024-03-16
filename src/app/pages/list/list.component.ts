import { ListService } from './../../services/list.service';
import { Component, ViewChild} from '@angular/core';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { Cadastro } from 'src/app/model/list.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list: Cadastro[] = [];
  @ViewChild('dt') dt!: Table;

  constructor(
    private listService: ListService,
  ) {

    this.listService.list.subscribe((data) => {
      this.list = Object.assign([], data);
      console.log('perfis', data)
    })
    lastValueFrom(listService.getList()).then
  }
}
