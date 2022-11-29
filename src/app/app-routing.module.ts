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
import { ListeProduitComponent } from './Admin/liste-produit/liste-produit.component';
import { AjouterComponent } from './Admin/ajouter/ajouter.component';
import { AjouteralimComponent } from './Admin/ajouteralim/ajouteralim.component';

const routes: Routes = [
  {path:'accueil',title:'Accueil', component:AccueilComponent},
  {path:'shop',title:'shop', component:ShopComponent},
  {path:'produits/:id',title:'Produit choisit', component:SelectedProduitComponent},
  {path:'liste',title:'Produit choisit', component:ListeProduitComponent},
  {path:'ajouter',title:'Produit choisit', component:AjouterComponent},
  {path:'alimentation/:id',title:'Alimentation choisit', component:SelectedalimComponent},
  {path:'accueil/:id',title:'Accessoire choisit', component:SelectedProduitComponent},
  {path:'cart',title:'Accessoire choisit', component:CartComponent},
  {path:'accueil/:id',title:'Alimentation choisit', component:SelectedalimComponent},
  {path:'contact',title:'Contact', component:ContactComponent},
  {path:'adopt',title:'Adopt', component:AdoptComponent},
  {path:'adopt/:id',title:'Adopt', component:SelectedAnimalComponent},
  {path:'aboutus',title:'A propos de nous', component:AboutusComponent},
  {path:'produits',title:'Accessoires', component:ProduitsComponent},
  {path:'alimentation',title:'Alimentation', component:AlimentationComponent},
  {path:'ajouteralim',title:'ajouter alim', component:AjouteralimComponent},
  {path:'ajouter',title:'ajouter acces', component:AjouterComponent},
  {path:'panier',title:'Panier', component:CartComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', title:'Erreur',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
