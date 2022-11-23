import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentation } from '../alimentationclass/alimentation';
import { Produit } from '../Produitclass/produit';
// const URL2 = 'http://localhost:4500/alimentations';
const URL = 'http://localhost:3000/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitservService {

  constructor(private http: HttpClient) { }
  
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(URL);
  }
  // getAlimentation(): Observable<Alimentation[]> {
  //   return this.http.get<Alimentation[]>(URL2);
  // }
  getProduitsById(id: number): Observable<Produit> {
    return this.http.get<Produit>(URL+'/' +id);
  }
  // getalimentationById(ref: number): Observable<Alimentation> {
  //   return this.http.get<Alimentation>(URL2+'/'+ref);
  // }
  

}
