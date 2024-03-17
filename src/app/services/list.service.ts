
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cadastro, ObjectIdNome } from "../model/list.model";
import { environment } from "../environment/environment";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Response } from "../model/response.model";

@Injectable({
  providedIn: 'root'
})

export class ListService {
  url = environment.url;
  list: BehaviorSubject<Cadastro[]> = new BehaviorSubject<Cadastro[]>([])
  listAgencias: BehaviorSubject<ObjectIdNome[]> = new BehaviorSubject<ObjectIdNome[]>([])
  listUnidades: BehaviorSubject<ObjectIdNome[]> = new BehaviorSubject<ObjectIdNome[]>([])


  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<Cadastro[]>(`http://crm4u.azurewebsites.net/api/API`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  getListAgencia(){
    return this.httpClient.get<ObjectIdNome[]>(`http://crm4u.azurewebsites.net/api/API?param=agencias`)
      .pipe(tap({
        next: res => {
          this.listAgencias.next(res)
        }
      }))
  }

  getListUnidade(){
    return this.httpClient.get<ObjectIdNome[]>(`http://crm4u.azurewebsites.net/api/API?param=unidades`)
      .pipe(tap({
        next: res => {
          this.listUnidades.next(res)
        }
      }))
  }

  

  put(model: Cadastro) {
    return this.httpClient.put<Response>(`http://crm4u.azurewebsites.net/api/API/`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Aula/${id}`)
  }
}