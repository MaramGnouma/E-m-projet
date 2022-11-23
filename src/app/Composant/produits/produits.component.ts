import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Produitclass/produit';
import { ProduitservService } from 'src/app/Service/produitserv.service';
 
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  lesProduits!:Produit[];
  constructor(private produitService:ProduitservService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe (data => this.lesProduits = data)
   
  }

}
