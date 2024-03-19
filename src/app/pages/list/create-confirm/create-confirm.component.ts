import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ObjectIdNome, Cadastro, ListCadastro } from 'src/app/model/list.model';
import { ListService } from 'src/app/services/list.service';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-create-confirm',
  templateUrl: './create-confirm.component.html',
  styleUrl: './create-confirm.component.scss'
})
export class CreateConfirmComponent {
  Id: number = 0;
  open = true;
  erro = '';
  object: ListCadastro = new ListCadastro;
  loading: boolean = false;
  cadastro: Cadastro = new Cadastro;


  constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
    private listService: ListService,
    private toastr: ToastrService,){

      this.activatedRoute.params.subscribe(res =>{
       
        if(res['id']){
          console.log('Estamos criando create-confirm')
          this.object.Id = res['id'];
          // Função para atualizar a lista e cadastrar novo objeto
            lastValueFrom(this.listService.getList()).then (lista => {
              if (lista.length == 0) {
                this.toastr.error('Operação Inválida');
                return
              }
              else {
                console.log(lista.length)
                var obj = lista.find(x => x.Id == this.object.Id);
                if (obj != null) {
                  this.object = obj
                }
                else {
                  this.toastr.error('Operação Inválida');
                }
              }
            });
           
          
        }
      }
   )}



 // Fechar modal e retornar para rota anterior
 close(): void {
  this.open = false;
  this.router.navigate(['']);
  return;
}

  //Função para copiar o valor armazenado
  CopyToClipboard() {
    var result = '';
    result += 'Agência: ' + this.object.Agencia + '\n'
    result += 'Unidade: ' + this.object.Unidade + '\n'
    result += 'Api Key: ' + this.object.ApiKey + '\n'
    result += 'Api Password: ' + this.object.ApiPassword 
    navigator.clipboard.writeText(result);
    this.toastr.success('Chave copiada para área de transferência!');
  }
}
