
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    return this.httpClient.get<ListCadastro[]>(`http://crm4u.azurewebsites.net/api/API`, {headers: new HttpHeaders().set('AccessKey', 'Hn(8D3s5FmqudUnWd!P9bQ%UgM)m9F)&amp;WD9f^yP)W')})
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  getListAgencia(){
    return this.httpClient.get<ObjectIdNome[]>(`http://crm4u.azurewebsites.net/api/API?param=agencias`, {headers: new HttpHeaders().set('AccessKey', 'Hn(8D3s5FmqudUnWd!P9bQ%UgM)m9F)&amp;WD9f^yP)W')})
      .pipe(tap({
        next: res => {
          this.listAgencias.next(res)
        }
      }))
  }

  getListUnidade(){
    return this.httpClient.get<ObjectIdNome[]>(`http://crm4u.azurewebsites.net/api/API?param=unidades`, {headers: new HttpHeaders().set('AccessKey', 'Hn(8D3s5FmqudUnWd!P9bQ%UgM)m9F)&amp;WD9f^yP)W')})
      .pipe(tap({
        next: res => {
          this.listUnidades.next(res)
        }
      }))
  }

  get(id: number) {
    return this.httpClient.get<ListCadastro>(`http://crm4u.azurewebsites.net/api/API/${id}`, {headers: new HttpHeaders().set('AccessKey', 'Hn(8D3s5FmqudUnWd!P9bQ%UgM)m9F)&amp;WD9f^yP)W')})
  }
  

  put(model: Cadastro) {
    console.log(model)
    return this.httpClient.put<Response>(`http://crm4u.azurewebsites.net/api/API/`, model, {headers: new HttpHeaders().set('AccessKey', 'Hn(8D3s5FmqudUnWd!P9bQ%UgM)m9F)&amp;WD9f^yP)W')})
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`http://crm4u.azurewebsites.net/api/API/${id}`, {headers: new HttpHeaders().set('AccessKey', 'Hn(8D3s5FmqudUnWd!P9bQ%UgM)m9F)&amp;WD9f^yP)W')})
   
  }
}