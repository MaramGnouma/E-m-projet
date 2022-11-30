import { Component, OnInit } from '@angular/core';
import { Alimentation } from 'src/app/alimentationclass/alimentation';
import { AlimentationsService } from 'src/app/Service/alimentations.service';
import { ProduitservService } from 'src/app/Service/produitserv.service';

@Component({ 
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.css']
})
export class AlimentationComponent implements OnInit {

  Alim!:Alimentation[];
  constructor(private alimService:AlimentationsService) { }

  ngOnInit(): void {
  
 this.alimService.getAlimentation().subscribe (data => this.Alim = data)
   
  }

}
