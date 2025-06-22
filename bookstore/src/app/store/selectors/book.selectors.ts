import { createSelector } from '@ngrx/store';
import { AppState } from '../state';

export const selectApp = (state: { app: AppState }) => state.app;

export const selectBooks = createSelector(
  selectApp,
  (appState) => appState.books
);

// FIX: Add null check and return empty object if undefined
export const selectCart = createSelector(
  selectApp,
  (appState) => appState.cart || {}
);

export const selectCartItems = createSelector(
  selectBooks,
  selectCart,
  (books, cart) => {
    // FIX: Ensure cart is always an object
    const safeCart = cart || {};
    return Object.entries(safeCart).map(([bookId, qty]) => ({
      book: books.find(b => b.id === bookId),
      qty
    }));
  }
);

export const selectCartTotal = createSelector(
  selectCartItems,
  items => items.reduce((total, item) => total + (item.book?.price || 0) * item.qty, 0)
);
