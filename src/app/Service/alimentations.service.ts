import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentation } from '../alimentationclass/alimentation';
import { Produit } from '../Produitclass/produit';
const URL2= 'http://localhost:3200/alimentations';
@Injectable({
  providedIn: 'root'
})
export class AlimentationsService {

  constructor(private http: HttpClient) { }

getAlimentation(): Observable<Alimentation[]> {
  return this.http.get<Alimentation[]>(URL2);
}
getalimentationById(id: number): Observable<Alimentation> {
  return this.http.get<Alimentation>(URL2+'/'+id);
}

/*getProduits(): Observable<Produit[]> {
  return this.http.get<Produit[]>(URL);
}
getProduitsById(id: number): Observable<Produit> {
  return this.http.get<Produit>(URL+'/' +id);
}*/
}
