import { Component, OnDestroy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBooks, selectCart } from '../../store/selectors/book.selectors';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/(NG)book-card.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  template: `
    <div class="store">
      <app-book-card
        *ngFor="let book of books"
        [book]="book"
        [inCart]="cart[book.id] || 0"
      ></app-book-card>
    </div>
  `,
  styles: [`
  .store {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    padding: 1rem;
    background: #fff8f2; /* very light orange background */
    justify-content: center;
  }

  app-book-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }

  app-book-card:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(255, 152, 0, 0.2);
  }
`]

})
export class StorePageComponent implements OnDestroy {
  books: any[] = [];
  cart: { [key: string]: number } = {};

  private store = inject(Store);
  private subscriptions = new Subscription();

  constructor() {
    this.subscriptions.add(
      this.store.select(selectBooks).subscribe(books => this.books = books)
    );
    this.subscriptions.add(
      this.store.select(selectCart).subscribe(cart => this.cart = cart)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
