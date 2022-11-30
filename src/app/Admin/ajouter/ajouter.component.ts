import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Alimentation } from 'src/app/alimentationclass/alimentation';
import { Produit } from 'src/app/Produitclass/produit';
import { AlimentationsService } from 'src/app/Service/alimentations.service';
import { ProduitservService } from 'src/app/Service/produitserv.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  lesproduits!:Produit[];
  lesalim!:Alimentation[];
  prodForm!:FormGroup;
   constructor(private produitservice:ProduitservService,private alimservice:AlimentationsService,private form:FormBuilder) { }

  ngOnInit(): void {
    this.prodForm = this.form.nonNullable.group({
      id:[0],
      libelle:[0],
      prix:[0],
      disponible:false,
      photo:[''],
      color:[''],
      materiel:[''],
      brand:[''],
      dimension:['']
    })
  }
  Ajouter() {
    this.produitservice.ajouteracces(this.prodForm.value).subscribe(data=>this.lesproduits.push(data));
    alert("ajout true");
  }

}
