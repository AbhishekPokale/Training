import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Book] Add to Cart',
  props<{ bookId: string }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ bookId: string }>()
);

export const increaseQty = createAction(
  '[Cart] Increase Qty',
  props<{ bookId: string }>()
);

export const decreaseQty = createAction(
  '[Cart] Decrease Qty',
  props<{ bookId: string }>()
);

export const checkout = createAction('[Cart] Checkout');
