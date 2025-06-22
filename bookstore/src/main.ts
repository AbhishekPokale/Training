import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { bookReducer } from './app/store/reducers/book.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ app: bookReducer }),
    provideStoreDevtools({ maxAge: 25 })
  ]
});
