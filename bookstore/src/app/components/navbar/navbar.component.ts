import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCart } from '../../store/selectors/book.selectors';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <span>BookStore</span>
      <span class="cart" (click)="goToCart()">
        🛒 <span>{{ cartCount }}</span>
      </span>
    </nav>
  `,
  styles: [`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.2rem;
    background: linear-gradient(90deg, #ff9800 0%, #2196f3 100%);
    color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    font-weight: 600;
  }
  nav span {
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }
  .cart {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255, 255, 255, 0.15);
    padding: 0.35rem 0.8rem;
    border-radius: 1.2rem;
    transition: background 0.2s;
  }
  .cart:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  .cart span {
    background: #ff9800;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: bold;
  }
`]

})
export class NavbarComponent implements OnDestroy {
  cartCount = 0;
  private subscription: Subscription;
  private store = inject(Store);
  private router = inject(Router);

  constructor() {
    this.subscription = this.store.select(selectCart).subscribe(cart => {
      // Add null/undefined check before Object.values()
      this.cartCount = cart 
        ? Object.values(cart).reduce((a: number, b: number) => a + b, 0)
        : 0;
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
