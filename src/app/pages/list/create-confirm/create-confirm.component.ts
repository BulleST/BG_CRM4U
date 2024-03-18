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
          this.object.Id = res['id'];
          this.listService.list.subscribe(lista => {
            if (lista.length) {
              var obj = lista.find(x => x.Id == this.object.Id);
              console.log('obj', obj);
              if(obj != null){
                this.object = obj
              }
              else {
                this.toastr.error('Operação Inválida')  
              }
             

            }
          })
          
          // lastValueFrom(this.listService.get(this.object.Id)).then(res => {
          //     this.object = res;
          //     console.log(res)
          // })
       }
      }
   )}



 // Fechar modal e retornar para rota anterior
 close(): void {
  this.open = false;
  this.router.navigate(['']);
  return;
}

send() {
  this.loading = true;
  console.log(this.object)
  lastValueFrom(this.listService.put(this.cadastro)).then(res => {
    console.log(res)
    // Cadastro concluído com Sucesso
    if (!res.Message) {
      this.toastr.success('Operação concluída com sucesso');
      lastValueFrom(this.listService.getList());
      this.close();
    }
    // Mensagem de erro
    else {
      this.loading = false;
      this.erro = res.Message;
      this.toastr.error(res.Message)
    }
  })

    .catch(res => {
      this.loading = false;
      this.erro = res.error.Message;
      this.toastr.error(res.error.Message)
    })
}

  //Função para copiar o valor armazenado
  CopyToClipboard(ApiKey : string, ApiPassword: string) {
    var result = '';
    result += 'Apikey: ' + ApiKey + '\n'
    result += 'ApiPassword: ' + ApiPassword
    navigator.clipboard.writeText(result);
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
