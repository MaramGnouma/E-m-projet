import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
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
