import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animals } from '../AnimalsClass/animals';
const URL =  'http://localhost:2000/Animals';
@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  
  constructor(private http1:HttpClient) { }
   
  getAnimals():Observable<Animals[]>{
    return this.http1.get<Animals[]>(URL);
    } 
    // getCat(type:string):Observable<Animals[]>{
    //   return this.http1.get<Animals[]>( `${URL}/${type}`);
    //   }
    getAnimalById(id: number): Observable<Animals> {
      return this.http1.get<Animals>(URL+'/' +id);
    }
    
    
}

 
