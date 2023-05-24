import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, BooksComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'book',
        loadChildren: () =>
          import('./books/books.module').then((mod) => mod.BooksModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
