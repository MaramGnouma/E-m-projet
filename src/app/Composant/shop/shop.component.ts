import { Component, OnInit } from '@angular/core';
import { Alimentation } from 'src/app/alimentationclass/alimentation';
import { Produit } from 'src/app/Produitclass/produit';
import { AlimentationsService } from 'src/app/Service/alimentations.service';
import { ProduitservService } from 'src/app/Service/produitserv.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 lesProduits!:Produit[];
  Alim!:Alimentation[];
  constructor(private alimService:AlimentationsService,private produitService:ProduitservService,) { }

  ngOnInit(): void {
 this.produitService.getProduits().subscribe (data1 => this.lesProduits = data1)
 this.alimService.getAlimentation().subscribe (data => this.Alim = data)
   
  }

  afficher:number=0;
  animalFilter(lesproduits:Alimentation[],cat:string){
    const a =lesproduits.filter(prod => prod.cat == cat);
    return a;
    }

    transformation(n:number){
      this.afficher=n;
    }

}
