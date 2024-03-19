import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ObjectIdNome, Cadastro } from 'src/app/model/list.model';
import { ListService } from 'src/app/services/list.service';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  id: number = 0;
  open = true;
  erro = '';
  cadastro: Cadastro = new Cadastro;
  loading: boolean = false;
  listAgencia: ObjectIdNome[] =[];
  listUnidade: ObjectIdNome[] =[];


  constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
    private listService: ListService,
    private toastr: ToastrService,){

      //Captura Agências
      lastValueFrom(listService.getListAgencia()).then( res =>{
        this.listAgencia = res;       
      })
       //Captura Unidades
      lastValueFrom(listService.getListUnidade()).then( res =>{
        this.listUnidade = res;
      })

    }

    

  // Fechar modal e retornar para rota anterior
	close(): void {
		this.open = false;
		this.router.navigate(['']);
		return;
	}
  // Função para salvar cadastro
  send() {
    this.loading = true;
    console.log(this.cadastro)
    lastValueFrom(this.listService.put(this.cadastro)).then(res => {
      console.log(res)
      // Cadastro concluído com Sucesso
      if (!res.Message) {
        this.toastr.success('Operação concluída com sucesso');
        lastValueFrom(this.listService.getList());
        this.router.navigate(['confirmar-cadastro', res.Id], {relativeTo: this.activatedRoute});
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
        this.toastr.error(res.error.Message)
      })
  }
}
