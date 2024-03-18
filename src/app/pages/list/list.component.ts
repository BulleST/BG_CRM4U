import { ListService } from './../../services/list.service';
import { Component, ViewChild} from '@angular/core';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { Cadastro, ListCadastro } from 'src/app/model/list.model';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list: ListCadastro[] = [];
  erro = '';
  @ViewChild('dt') dt!: Table;

  constructor(
    private listService: ListService,
    private toastr: ToastrService,
  ) {

    this.listService.list.subscribe((data) => {
      this.list = Object.assign([], data);
     
    })
    lastValueFrom(listService.getList()).then
  }
  //Função para copiar o valor armazenado
  CopyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
    this.toastr.success('Chave copiada para área de transferência!');
    // const textArea = document.createElement('textarea');
    // textArea.style.position = 'fixed';
    // textArea.style.left = '0';
    // textArea.style.top = '0';
    // textArea.style.opacity = '0';
    // textArea.value = value;
    // document.body.appendChild(textArea);
    // textArea.focus();
    // textArea.select();
    // document.execCommand('copy');
    // document.body.removeChild(textArea);
  }
}
