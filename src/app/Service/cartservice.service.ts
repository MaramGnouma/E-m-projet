import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from '../Produitclass/produit';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public productList=new BehaviorSubject<Produit[]>([]);
  public search=new BehaviorSubject<string>("");
  cartItemList: any;
  grandTotal!: number;
  
  constructor() { }
  getProducts()
  {
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice() {
   this.grandTotal=0;
   this.cartItemList.map((a:any)=>{
    this.grandTotal+=a.total;
   })
   return this.grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
