import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactclass } from '../contactclass';
const URL = 'http://localhost:5200/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactservService {

  constructor(private http: HttpClient) { }
  ajouterctc(acces:Contactclass):Observable<Contactclass>{
    return this.http.post<Contactclass>(URL, acces);
  }
}
