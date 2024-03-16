import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  open = true;

  constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,){

    }

  // Fechar modal e retornar para rota anterior
	close(): void {
		this.open = false;
		this.router.navigate(['']);
		return;
	}
}
