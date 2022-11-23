import { AnimalsService } from './../../Service/animals.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from 'src/app/AnimalsClass/animals';

@Component({ 
  selector: 'app-selected-animal',
  templateUrl: './selected-animal.component.html',
  styleUrls: ['./selected-animal.component.css']
})
export class SelectedAnimalComponent implements OnInit {
  idAnimal!:number; 
  Animal!:Animals;
  constructor(private activatetRoute:ActivatedRoute,private animalsService:AnimalsService) { }

  ngOnInit(): void {
    this.idAnimal = this.activatetRoute.snapshot.params['id'];
    this.animalsService
      .getAnimalById(this.idAnimal)
      .subscribe((data) => (this.Animal = data));
  }

}





