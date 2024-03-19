import { ListService } from './../../services/list.service';
import { Component, ViewChild} from '@angular/core';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { ListCadastro } from 'src/app/model/list.model';
import { ToastrService } from "ngx-toastr";
import * as FileSaver from 'file-saver';
import * as xlsx from "xlsx";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list: ListCadastro[] = [];
  erro = '';
  @ViewChild('dt') dt!: Table;

  cols: any[] = [
    {field: 'Id'},
    {field: 'Agencia'},
    {field: 'Unidade'},
    {field: 'ApiKey'},
    {field: 'ApiPassword'},
  
];

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
    CopyToClipboard(object: ListCadastro) {
      var result = '';
      result += 'Agência: ' + object.Agencia + '\n'
      result += 'Unidade: ' + object.Unidade + '\n'
      result += 'Api Key: ' + object.ApiKey + '\n'
      result += 'Api Password: ' + object.ApiPassword 
      navigator.clipboard.writeText(result);
      this.toastr.success('Chave copiada para área de transferência!');
    }

    // Função para filtrar a tabela a partir do input
    applyFilterGlobal(event: any, filterType: string) {
      this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
    }

    exportExcel() {
      import("xlsx").then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(this.list);
          const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, "CRM4U");
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
    
}
