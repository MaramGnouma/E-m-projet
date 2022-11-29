import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alimentation } from 'src/app/alimentationclass/alimentation';
import { Produit } from 'src/app/Produitclass/produit';
import { AlimentationsService } from 'src/app/Service/alimentations.service';
import { ProduitservService } from 'src/app/Service/produitserv.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
commentForm:FormGroup=new FormGroup({
  id:new FormControl('user'),
  titre:new FormControl('titre'),
  Comment:new FormControl('commentaire'),
})
Alim!:Alimentation[];
lesProduits!:Produit[];
constructor(private produitService:ProduitservService,private alimService:AlimentationsService) { }

ngOnInit(): void {
  this.produitService.getProduitsnouv().subscribe (data => this.lesProduits = data);
  this.alimService.getAlimentationnouv().subscribe (data => this.Alim = data);
}

  aff:boolean=false;
  onAfficher(){
    this.aff=true;
    var a=this.commentForm.value;
    return a;
  }
  onVider(){
    this.commentForm.reset();
  }
}
