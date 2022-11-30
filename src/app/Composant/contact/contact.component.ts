import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contactclass } from 'src/app/contactclass';
import { ContactservService } from 'src/app/Service/contactserv.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lesproduits!:Contactclass[];
  inscrireForm!:FormGroup;
  constructor( private fb:FormBuilder,private servcont:ContactservService) { }
  lesVilles: string[] = [
    'Tunis', 'Ariana', 'Ben arous' ,'Manouba','Bizerte', 'Sousse', 'Sfax' ,'nabeul' ,'Mahdia' , 'Zaghouan' , 'Beja' ,'Kef' ,'Jendouba' 
    ,' Kasserine' , 'Gabes','Tozeur' ,'Monastir' , 'Kebelli', 'Sidi bouzid' ,'Gafsa','Medenine','Tataouin','Kairouan'];
  ngOnInit(): void {
this.inscrireForm=this.fb. nonNullable.group({
  nom:"",
   datedenais: "",
   tel: "",
   email:"",
   sexe:"",
   adresse:""}) 
}
onReset(){
  this.inscrireForm.reset();
  }
  ajouterctc() {
    this.servcont.ajouterctc(this.inscrireForm.value).subscribe(data=>this.lesproduits.push(data));
    this.onReset();
    alert("ajout true");

  }
}

