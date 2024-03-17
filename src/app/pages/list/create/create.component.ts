import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ObjectIdNome, Cadastro } from 'src/app/model/list.model';
import { ListService } from 'src/app/services/list.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  open = true;
  cadastro: Cadastro = new Cadastro;
  selectedAgencia: ObjectIdNome = new ObjectIdNome;
  loading: boolean = false;
  listAgencia: ObjectIdNome[] =[];
  listUnidade: ObjectIdNome[] =[];


  constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
    private listService: ListService){

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
}
