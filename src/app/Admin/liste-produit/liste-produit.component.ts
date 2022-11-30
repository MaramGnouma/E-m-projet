import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Alimentation } from 'src/app/alimentationclass/alimentation';
import { Produit } from 'src/app/Produitclass/produit';
import { AlimentationsService } from 'src/app/Service/alimentations.service';
import { ProduitservService } from 'src/app/Service/produitserv.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
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
    this.produitservice.getProduits().subscribe (data => this.lesproduits = data)
    this.alimservice.getAlimentation().subscribe (data => this.lesalim = data)
  }
 /*AjouterAlim() {
    this.alimservice.ajouteralim(this.LivreForm.value).subscribe(data=>this.Leslivres.push(data));
  }*/
  // onSupprimer(id:number){
  //   this.produitservice.supprimeracess(id).subscribe();
  // }
  // onSupprime(id:number){
  //   this.alimservice.supprimerAlim(id).subscribe();
  // }

  supprimer(produit: Produit) {
    this.produitservice
      .supprimeracess(produit.id)
      .subscribe(
        (data) => (this.lesproduits = this.lesproduits.filter((e) => e.id != produit.id))
      );
  }
  supprimeralim(alim: Alimentation) {
    this.alimservice.supprimerAlim(alim.id)
      .subscribe(
        (data) => (this.lesalim = this.lesalim.filter((e) => e.id != alim.id))
      );
  }
    onmodifier(id:number, prod:Produit){
      this.produitservice.modifier(id,prod);
    }
    Ajouter() {
      this.produitservice.ajouteracces(this.prodForm.value).subscribe(data=>this.lesproduits.push(data));
    }

}
