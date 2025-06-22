import { Routes } from '@angular/router';
import { StorePageComponent } from './components/store-page/store-page.component';
import { CartComponent } from './components/cart/My-cart.component';

export const routes: Routes = [
  { path: '', component: StorePageComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];
