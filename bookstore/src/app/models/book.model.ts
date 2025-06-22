 
export interface Book {
  id: string;
  name: string;
  qty: number; // available stock
  price: number;
  image: string;
}

export interface CartItem {
  book: Book;
  qty: number; // in cart
}
