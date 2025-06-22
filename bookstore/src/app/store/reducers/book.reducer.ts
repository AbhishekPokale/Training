import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state';
import * as BookActions from '../actions/book.actions';

export const bookReducer = createReducer(
  initialState,
  on(BookActions.addToCart, (state, { bookId }) => {
    const book = state.books.find(b => b.id === bookId);
    const inCart = state.cart[bookId] || 0;
    if (!book || book.qty === 0 || inCart >= 2) return state;
    return {
      ...state,
      cart: { ...state.cart, [bookId]: inCart + 1 }
    };
  }),
  on(BookActions.removeFromCart, (state, { bookId }) => {
    const { [bookId]: removed, ...rest } = state.cart;
    return { ...state, cart: rest };
  }),
  on(BookActions.increaseQty, (state, { bookId }) => {
    const book = state.books.find(b => b.id === bookId);
    const inCart = state.cart[bookId] || 0;
    if (!book || book.qty === 0 || inCart >= 2) return state;
    return {
      ...state,
      cart: { ...state.cart, [bookId]: inCart + 1 }
    };
  }),
  on(BookActions.decreaseQty, (state, { bookId }) => {
    const inCart = state.cart[bookId] || 0;
    if (inCart <= 1) {
      const { [bookId]: removed, ...rest } = state.cart;
      return { ...state, cart: rest };
    }
    return {
      ...state,
      cart: { ...state.cart, [bookId]: inCart - 1 }
    };
  }),
  on(BookActions.checkout, (state) => {
    // Decrease qty of each book based on cart
    const newBooks = state.books.map(book => {
      const inCart = state.cart[book.id] || 0;
      return { ...book, qty: Math.max(0, book.qty - inCart) };
    });
    return { ...state, books: newBooks, cart: {} };
  })
);
