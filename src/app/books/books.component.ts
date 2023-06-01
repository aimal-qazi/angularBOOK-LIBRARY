import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  status = '';
  titles: any = [];
  input1: any;
  bookAv: any[] = [];
  input2: any;
  issmodel = false;
  selectedOption!: string;
  bookData: any[] = [];
  bookForm!: FormGroup;
  books = [
    {
      id: 5000,
      title: 'Harry Potter',
      author: 'Micheal',
      Category: 'Action',
      Tags: 'Fiction, Inspired',
      status: 0,
    },
    {
      id: 5001,
      title: 'Beuty and the beast',
      author: 'Faraday',
      Category: 'Action',
      Tags: 'Inspired',
      status: 0,
    },
    {
      id: 5002,
      title: 'Lion King',
      author: 'Ahmad',
      Category: 'Action',
      Tags: 'Fiction',
      status: 1,
    },
    {
      id: 5003,
      title: 'John wick',
      author: 'Babar',
      Category: 'Action',
      Tags: 'Fiction, Inspired',
      status: 0,
    },
    {
      id: 5004,
      title: 'Mortal kombat',
      author: 'Mujeeb',
      Category: 'Action',
      Tags: 'Inspired',
      status: 1,
    },
    {
      id: 5005,
      title: 'WWE',
      author: 'Akthar',
      Category: 'Action',
      Tags: 'Fiction',
      status: 0,
    },
    {
      id: 5006,
      title: 'Final destination',
      author: 'Bruce',
      Category: 'Action',
      Tags: 'Fiction',
      status: 0,
    },
    {
      id: 5007,
      title: 'Conjuring',
      author: 'Sheikh',
      Category: 'Action',
      Tags: 'Fiction, Inspired',
      status: 1,
    },
    {
      id: 5008,
      title: 'Jumanji',
      author: 'Henry',
      Category: 'Action',
      Tags: 'Fiction, Inspired',
      status: 0,
    },
    {
      id: 5009,
      title: 'big bang theory',
      author: 'Jordan',
      Category: 'Action',
      Tags: 'Inspired',
      status: 0,
    },
    {
      id: 5010,
      title: 'Harry Potter and the goblet of fire',
      author: 'Ab Cattle',
      Category: 'Action',
      Tags: 'Inspired',
      status: 1,
    },
    {
      id: 5011,
      title: 'Harry Potter and the stone',
      author: 'Rashid',
      Category: 'Action',
      Tags: 'Fiction, Inspired',
      status: 0,
    },
  ];

  availableBook: any[] = [];

  ngOnInit(): void {
    this.availableBook = this.books.filter((book) => book.status == 0);
    this.bookAv = this.availableBook;

    this.bookForm = new FormGroup({
      id: new FormControl(''),
      book: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
    this.bookForm.reset();
  }

  getting() {
    const getData = this.bookForm.getRawValue();
    this.bookData.push(getData);
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[0].title == this.bookData[i].book) {
        this.books[0].status = 1;
        alert('Book is issued check the issued book list');
      } else if (this.books[1].title == this.bookData[i].book) {
        this.books[1].status = 1;
      } else if (this.books[2].title == this.bookData[i].book) {
        this.books[2].status = 1;
      } else if (this.books[3].title == this.bookData[i].book) {
        this.books[3].status = 1;
      } else if (this.books[4].title == this.bookData[i].book) {
        this.books[4].status = 1;
      } else if (this.books[5].title == this.bookData[i].book) {
        this.books[5].status = 1;
      } else if (this.books[6].title == this.bookData[i].book) {
        this.books[6].status = 1;
      } else if (this.books[7].title == this.bookData[i].book) {
        this.books[7].status = 1;
      } else if (this.books[8].title == this.bookData[i].book) {
        this.books[8].status = 1;
      } else if (this.books[9].title == this.bookData[i].book) {
        this.books[9].status = 1;
      } else if (this.books[10].title == this.bookData[i].book) {
        this.books[10].status = 1;
      } else if (this.books[11].title == this.bookData[i].book) {
        this.books[11].status = 1;
      }
      this.input1 = '';
      this.input2 = '';
      this.selectedOption = '';
      this.availableBook = this.books.filter((book) => book.status == 0);
    }
  }

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
