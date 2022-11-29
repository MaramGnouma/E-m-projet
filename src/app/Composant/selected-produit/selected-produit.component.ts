import { ProduitservService } from 'src/app/Service/produitserv.service';
import { Produit } from './../../Produitclass/produit';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-selected-produit',
  templateUrl: './selected-produit.component.html',
  styleUrls: ['./selected-produit.component.css']
})
export class SelectedProduitComponent implements OnInit {
idProduit!:number; 
produit!:Produit;
employeForm!:FormGroup;
lesEmployes!:Produit[];
  constructor(private activatetRoute:ActivatedRoute,private produitservService:ProduitservService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.idProduit = this.activatetRoute.snapshot.params['id'];
    this.produitservService.getProduitsById(this.idProduit).subscribe((data) => (this.produit = data));
    this.produitservService.getProduitsnouvById(this.idProduit).subscribe((data) => (this.produit = data));
    this.createForm();
  }
  get lesDiplomes(){
    return this.employeForm.get('diplomes') as FormArray;
  }
  createForm(){
    this.employeForm = this.fb.nonNullable.group({
      diplomes:this.fb.array([])
    })
  }
  ajouterDiplome(){
    this.lesDiplomes.push(this.fb.group({
      email:[''],
      message:['']
    }))
  }
/*
  Ajouter() {
    this.produitservService.ajouteracces(this.employeForm.value).subscribe(data=>this.lesEmployes.push(data));
  }*/



}
