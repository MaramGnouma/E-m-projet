import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentation } from '../alimentationclass/alimentation';
import { Produit } from '../Produitclass/produit';
const URL2= 'http://localhost:5000/alimentations';
const URL3 = 'http://localhost:3000/nouveauxalim';
@Injectable({
  providedIn: 'root'
})
export class AlimentationsService {

  constructor(private http: HttpClient) { }

getAlimentation(): Observable<Alimentation[]> {
  return this.http.get<Alimentation[]>(URL2);
}
getAlimentationnouv(): Observable<Alimentation[]> {
  return this.http.get<Alimentation[]>(URL3);
}
getalimentationById(id: number): Observable<Alimentation> {
  return this.http.get<Alimentation>(URL2+'/'+id);
}
getalimentationnouvById(id: number): Observable<Alimentation> {
  return this.http.get<Alimentation>(URL3+'/'+id);
}
ajouteralim(alims:Alimentation):Observable<Alimentation>{
  return this.http.post<Alimentation>(URL2, alims);
}

/*ajouteralim(alim:Alimentation):Observable<Alimentation>{
  return this.http.post<Alimentation>(URL2, alim);
}*/
supprimerAlim( id:number)
{
  return this.http.delete(URL2+"/"+id);

}
}
