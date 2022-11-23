import { SelectedAnimalComponent } from './Composant/selected-animal/selected-animal.component';
import { AboutusComponent } from './Composant/aboutus/aboutus.component';
import { AdoptComponent } from './Composant/adopt/adopt.component';
import { ErreurComponent } from './Composant/erreur/erreur.component';
import { ProduitsComponent } from './Composant/produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Composant/accueil/accueil.component';
import { ContactComponent } from './Composant/contact/contact.component';
import { ShopComponent } from './Composant/shop/shop.component';
import { AlimentationComponent } from './Composant/alimentation/alimentation.component';
import { SelectedProduitComponent } from './Composant/selected-produit/selected-produit.component';
import { SelectedalimComponent } from './Composant/selectedalim/selectedalim.component';
import { CartComponent } from './Composant/cart/cart.component';

const routes: Routes = [
  {path:'accueil',title:'Accueil', component:AccueilComponent},
  {path:'shop',title:'shop', component:ShopComponent},
  {path:'produits/:id',title:'Produit choisit', component:SelectedProduitComponent},
  {path:'alimentation/:id',title:'Alimentation choisit', component:SelectedalimComponent},
  {path:'contact',title:'Contact', component:ContactComponent},
  {path:'adopt',title:'Adopt', component:AdoptComponent},
  //{path:'adopt/:id',title:'Adopt', component:SelectedAnimalComponent},
  {path:'aboutus',title:'A propos de nous', component:AboutusComponent},
  {path:'produits',title:'Accessoires', component:ProduitsComponent},
  {path:'alimentation',title:'Alimentation', component:AlimentationComponent},
  {path:'panier',title:'Panier', component:CartComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', title:'Erreur',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
