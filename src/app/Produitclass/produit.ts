import { Commentaire } from "../commentaire";

export class Produit {
    
    constructor(public id:number,public prix:number,public disponible:boolean,public photo:String,public color:String,public materiel:String,public brand:String,public libelle:String,public dimension:String,public commentaire:Commentaire[]){}
}
