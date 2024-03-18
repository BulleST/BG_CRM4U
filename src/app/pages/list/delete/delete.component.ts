
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ListService } from 'src/app/services/list.service';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  id: number = 0;
  open = true;
  erro = '';
  loading: boolean = false;



  constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
    	private listService: ListService,
    	private toastr: ToastrService,){

     this.activatedRoute.params.subscribe(res =>{
		console.log(res)
		if(res['id']){
			this.id = res['id'];
		}
	 })
    }

  // Fechar modal e retornar para rota anterior
	close(): void {
		this.open = false;
		this.router.navigate(['']);
		return;
	}
  // Função para excluir 
  exclude() {
		this.loading = true;
		lastValueFrom(this.listService.delete(this.id))
			.then(res => {
				console.log('estou no res', res)
				if (res == null) {
					lastValueFrom(this.listService.getList())
					this.close()
					this.toastr.success('Operação concluída com sucesso')
				}
				else {
					this.erro = res.Message
					this.toastr.error(res.Message)
				}
				this.loading = false;
			}).catch(res => {
				this.erro = res;
				console.error("console catch" + res);
			})
			.finally(() => {
				this.loading = false;
			})

	}
}
