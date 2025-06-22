import { Book } from '../models/book.model';

export interface AppState {
  books: Book[];
  cart: { [bookId: string]: number }; // bookId -> qty
}

export const initialBooks: Book[] = [
  {
    id: '1',
    name: 'Atomic Habits',
    qty: 4,
    price: 499,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg'
  },
  {
    id: '2',
    name: 'Deep Work',
    qty: 2,
    price: 399,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81p2c5eK5-L.jpg'
  },
  {
    id: '3',
    name: 'The Lean Startup',
    qty: 1,
    price: 699,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
  },
  {
    id: '4',
    name: 'Zero to One',
    qty: 5,
    price: 599,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg'
  },
  {
    id: '5',
    name: 'Thinking, Fast and Slow',
    qty: 3,
    price: 649,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71w4a3bQkAL.jpg'
  },
  {
    id: '6',
    name: 'The Power of Habit',
    qty: 2,
    price: 499,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81u6r4pT7kL.jpg'
  },
  {
    id: '7',
    name: 'Mindset: The New Psychology of Success',
    qty: 4,
    price: 449,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg'
  },
  {
    id: '8',
    name: 'Can’t Hurt Me',
    qty: 6,
    price: 599,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81f4P5rKJdL.jpg'
  },
  {
    id: '9',
    name: 'Rich Dad Poor Dad',
    qty: 7,
    price: 399,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg'
  },
  {
    id: '10',
    name: 'The Alchemist',
    qty: 4,
    price: 299,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg'
  },
  {
    id: '11',
    name: 'The 4-Hour Workweek',
    qty: 3,
    price: 549,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg'
  },
  {
    id: '12',
    name: 'Start With Why',
    qty: 2,
    price: 499,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg'
  },
  {
    id: '13',
    name: 'Sapiens: A Brief History of Humankind',
    qty: 5,
    price: 799,
    image: 'https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg'
  },
  {
    id: '14',
    name: 'Educated',
    qty: 2,
    price: 699,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg'
  },
  {
    id: '15',
    name: 'Grit: The Power of Passion and Perseverance',
    qty: 3,
    price: 459,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81r+LN4o6LL.jpg'
  },
  {
    id: '16',
    name: 'The Subtle Art of Not Giving a F*ck',
    qty: 4,
    price: 349,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg'
  },
  {
    id: '17',
    name: 'The Monk Who Sold His Ferrari',
    qty: 6,
    price: 299,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg'
  },
  {
    id: '18',
    name: 'Ikigai',
    qty: 5,
    price: 399,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg'
  },
  {
    id: '19',
    name: 'Outliers',
    qty: 3,
    price: 599,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg'
  },
  {
    id: '20',
    name: 'The Psychology of Money',
    qty: 8,
    price: 499,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg'
  }
];

export const initialState: AppState = {
  books: initialBooks,
  cart: {}
};
