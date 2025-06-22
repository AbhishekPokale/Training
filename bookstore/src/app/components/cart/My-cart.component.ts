import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotal } from '../../store/selectors/book.selectors';
import { increaseQty, decreaseQty, removeFromCart, checkout } from '../../store/actions/book.actions';
import { CommonModule } from '@angular/common';
import { AppState } from '../../store/state'; // Fix path if needed

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="items.length === 0" class="empty">Your cart is empty</div>
    <div *ngFor="let item of items" class="cart-item">
      <img [src]="item.book?.image" width="60" />
      <div class="item-details">
        <h3>{{ item.book?.name }}</h3>
        <p>₹{{ item.book?.price }} × {{ item.qty }} = ₹{{ item.book?.price * item.qty }}</p>
      </div>
      <div class="item-controls">
        <button (click)="decrease(item.book?.id)" [disabled]="item.qty <= 1">-</button>
        <span>{{ item.qty }}</span>
        <button (click)="increase(item.book?.id)" [disabled]="item.qty >= 2 || item.qty >= item.book?.qty">+</button>
        <button (click)="remove(item.book?.id)">Remove</button>
      </div>
    </div>
    <div class="total">
      <h3>Total: ₹{{ total }}</h3>
      <button (click)="onCheckout()" [disabled]="items.length === 0">Checkout</button>
    </div>
    <div *ngIf="showSuccess" class="success-msg">Purchase Successful!</div>
  `,
  styles: [`
    .empty { text-align: center; padding: 2rem; }
    .cart-item { display: flex; gap: 1rem; margin-bottom: 1rem; padding: 1rem; border-bottom: 1px solid #eee; }
    .item-details { flex: 1; }
    .item-controls { display: flex; align-items: center; gap: 0.5rem; }
    .total { margin-top: 2rem; padding: 1rem; background: #f8f8f8; display: flex; justify-content: space-between; align-items: center; }
    .success-msg { color: green; text-align: center; margin-top: 1rem; }
  `]
})
export class CartComponent {
  items: any[] = [];
  total = 0;
  showSuccess = false;
  
  // FIX: Use correct store type
  constructor(private store: Store<{ app: AppState }>) {
    this.store.select(selectCartItems).subscribe(items => this.items = items);
    this.store.select(selectCartTotal).subscribe(total => this.total = total);
  }
  
  increase(bookId: string) {
    this.store.dispatch(increaseQty({ bookId }));
  }
  
  decrease(bookId: string) {
    this.store.dispatch(decreaseQty({ bookId }));
  }
  
  remove(bookId: string) {
    this.store.dispatch(removeFromCart({ bookId }));
  }
  
  onCheckout() {
    this.store.dispatch(checkout());
    this.showSuccess = true;
    setTimeout(() => this.showSuccess = false, 3000);
  }
}
