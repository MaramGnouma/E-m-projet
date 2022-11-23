import { ProduitservService } from 'src/app/Service/produitserv.service';
import { Produit } from './../../Produitclass/produit';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-selected-produit',
  templateUrl: './selected-produit.component.html',
  styleUrls: ['./selected-produit.component.css']
})
export class SelectedProduitComponent implements OnInit {
idProduit!:number; 
produit!:Produit;
  constructor(private activatetRoute:ActivatedRoute,private produitservService:ProduitservService) { }

  ngOnInit(): void {
    this.idProduit = this.activatetRoute.snapshot.params['id'];
    this.produitservService
      .getProduitsById(this.idProduit)
      .subscribe((data) => (this.produit = data));
  }

}
