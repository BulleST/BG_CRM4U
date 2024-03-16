import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cadastro, Agencia } from "../model/list.model";
import { environment } from "../environment/environment";
import { BehaviorSubject, Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class ListService{
    url = environment.url;
    list: BehaviorSubject<Agencia[]> = new BehaviorSubject<Agencia[]>([])


    constructor(
        private httpClient: HttpClient
      ) { }

    getList() {
        return this.httpClient.get<Agencia[]>(`http://crm4u.azurewebsites.net/api/API`)
          .pipe(tap({
            next: res => {
              this.list.next(res)
            }
          }))
      }

      put(model: Cadastro) {
        return this.httpClient.post<Response>(`http://crm4u.azurewebsites.net/api/API/`, model)
      }

      delete(id: number) {
        return this.httpClient.delete<Response>(`${this.url}/Aula/${id}`)
      }
  }