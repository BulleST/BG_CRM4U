
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cadastro, ListCadastro, ObjectIdNome } from "../model/list.model";
import { environment } from "../environment/environment";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Response } from "../model/response.model";

@Injectable({
  providedIn: 'root'
})

export class ListService {
  url = environment.url;
  list: BehaviorSubject<ListCadastro[]> = new BehaviorSubject<ListCadastro[]>([])
  listAgencias: BehaviorSubject<ObjectIdNome[]> = new BehaviorSubject<ObjectIdNome[]>([])
  listUnidades: BehaviorSubject<ObjectIdNome[]> = new BehaviorSubject<ObjectIdNome[]>([])


  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<ListCadastro[]>(`http://crm4u.azurewebsites.net/api/API`)
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

  get(id: number) {
    return this.httpClient.get<ListCadastro>(`http://crm4u.azurewebsites.net/api/API/${id}`)
  }
  

  put(model: Cadastro) {
    console.log(model)
    return this.httpClient.put<Response>(`http://crm4u.azurewebsites.net/api/API/`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`http://crm4u.azurewebsites.net/api/API/${id}`)
  }
}