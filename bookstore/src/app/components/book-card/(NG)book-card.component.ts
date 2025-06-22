import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/actions/book.actions';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [class.out-of-stock]="book.qty === 0">
      <img [src]="book.image" [alt]="book.name" />
      <h3>{{ book.name }}</h3>
      <p>Price: ₹{{ book.price }}</p>
      <p>Available: {{ book.qty }}</p>
      <button
        [disabled]="book.qty === 0 || inCart >= 2"
        (click)="addBook()"
        [class.gray]="book.qty === 0"
      >Add to Cart</button>
      <div *ngIf="book.qty === 0" class="out-message">Out of Stock</div>
    </div>
  `,
 styles: [`
  .card {
    border: 1px solid #ffe0b2;
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(255, 153, 0, 0.2);
    padding: 1.2rem 1rem 1.5rem 1rem;
    width: 220px;
    margin: 1.2rem;
    background: #fffdf9;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .card:hover {
    box-shadow: 0 6px 24px rgba(255, 153, 0, 0.3);
    transform: translateY(-4px) scale(1.03);
  }
  .card img {
    width: 110px;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(255, 165, 0, 0.15);
    background: #fff8f2;
  }
  .card h3 {
    font-size: 1.12rem;
    margin: 0.5rem 0 0.3rem 0;
    font-weight: 700;
    text-align: center;
    color: #ff9800;
    letter-spacing: 0.5px;
    min-height: 48px;
    line-height: 1.2;
  }
  .card p {
    margin: 0.1rem 0;
    font-size: 0.98rem;
    color: #555;
    text-align: center;
  }
  button {
    margin-top: 0.8rem;
    padding: 0.48rem 1.3rem;
    border-radius: 18px;
    border: none;
    background: linear-gradient(90deg, #ff9800 0%, #2196f3 100%);
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 6px rgba(255, 152, 0, 0.2);
    outline: none;
  }
  button.gray,
  button:disabled {
    background: #cfd8dc !important;
    color: #888 !important;
    cursor: not-allowed;
    box-shadow: none;
  }
  .out-message {
    color: #e65100;
    font-weight: bold;
    position: absolute;
    top: 12px;
    right: 12px;
    background: #fff3e0;
    padding: 0.35rem 0.8rem;
    border-radius: 12px;
    font-size: 0.96rem;
    box-shadow: 0 1px 4px rgba(230, 81, 0, 0.1);
    z-index: 2;
    letter-spacing: 0.5px;
  }
  .card.out-of-stock {
    filter: grayscale(0.5) blur(1.5px) brightness(0.96);
    pointer-events: none;
    opacity: 0.7;
  }
`]

})
export class BookCardComponent {
  @Input() book: any;
  @Input() inCart = 0;
  constructor(private store: Store) {}
  addBook() {
    this.store.dispatch(addToCart({ bookId: this.book.id }));
  }
}
