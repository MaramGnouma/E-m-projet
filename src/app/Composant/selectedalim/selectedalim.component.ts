import { AlimentationsService } from './../../Service/alimentations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alimentation} from './../../alimentationclass/alimentation';
import { ProduitservService } from 'src/app/Service/produitserv.service';


@Component({  
  selector: 'app-selectedalim',
  templateUrl: './selectedalim.component.html',
  styleUrls: ['./selectedalim.component.css']
})
export class SelectedalimComponent implements OnInit {

  idAlim!:number;
  alimentation!:Alimentation;
  
  constructor(private activatetRoute:ActivatedRoute,private alimentationsService:AlimentationsService) { }

  ngOnInit(): void {
    this.idAlim = this.activatetRoute.snapshot.params['id'];

    this.alimentationsService
   .getalimentationById(this.idAlim)
    .subscribe((data) => (this.alimentation = data));
    

}


}

 

