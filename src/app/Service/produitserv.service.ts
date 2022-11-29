import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentation } from '../alimentationclass/alimentation';
import { Produit } from '../Produitclass/produit';
// const URL2 = 'http://localhost:4500/alimentations';
const URL = 'http://localhost:3000/produits';
const URL2 = 'http://localhost:3000/nouveauxprod';

@Injectable({
  providedIn: 'root'
})
export class ProduitservService {

  constructor(private http: HttpClient) { }
  
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(URL);
  }
  getProduitsnouv(): Observable<Produit[]> {
    return this.http.get<Produit[]>(URL2);
  }
  getProduitsById(id: number): Observable<Produit> {
    return this.http.get<Produit>(URL+'/' +id);
  }
  getProduitsnouvById(id: number): Observable<Produit> {
    return this.http.get<Produit>(URL2+'/' +id);
  }
  ajouteracces(acces:Produit):Observable<Produit>{
    return this.http.post<Produit>(URL, acces);
  }
  supprimeracess( id:number)
  {
    return this.http.delete(URL+"/"+id);
  
  }
  modifier(id:number, prod:Produit):Observable<Produit>{
    return this.http.put<Produit>(URL+"/"+id, prod);
  }
  

}
