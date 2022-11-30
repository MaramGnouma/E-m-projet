import { MenuComponent } from './Composant/menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccueilComponent } from './Composant/accueil/accueil.component';
import { AboutusComponent } from './Composant/aboutus/aboutus.component';
import { AdoptComponent } from './Composant/adopt/adopt.component';
import { ProduitsComponent } from './Composant/produits/produits.component';
import { ContactComponent } from './Composant/contact/contact.component';
import { ErreurComponent } from './Composant/erreur/erreur.component';
import { FooterComponent } from './Composant/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './Composant/shop/shop.component';
import { AlimentationComponent } from './Composant/alimentation/alimentation.component';
import { MoneyPipe } from './Lespipes/money.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectedProduitComponent } from './Composant/selected-produit/selected-produit.component';
import { SelectedalimComponent } from './Composant/selectedalim/selectedalim.component';
import { CartComponent } from './Composant/cart/cart.component';
import { SelectedAnimalComponent } from './Composant/selected-animal/selected-animal.component';
import { ListeProduitComponent } from './Admin/liste-produit/liste-produit.component';
import { ListAnimalComponent } from './Admin/list_animal/list-animal/list-animal.component';
import { AjouterComponent } from './Admin/ajouter/ajouter.component';
import { AjouteralimComponent } from './Admin/ajouteralim/ajouteralim.component';
import { ModifierComponent } from './Admin/modifier/modifier.component';
import { SpinnerComponent } from './Composant/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutusComponent,
    AdoptComponent,
    ProduitsComponent,
    ContactComponent,
    MenuComponent,
    ErreurComponent,
    FooterComponent,
    ShopComponent,
    AlimentationComponent,
    MoneyPipe,
    SelectedProduitComponent,
    SelectedalimComponent,
    CartComponent,
    SelectedAnimalComponent,
    ListeProduitComponent,
    ListAnimalComponent,
    AjouterComponent,
    AjouteralimComponent,
    ModifierComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
