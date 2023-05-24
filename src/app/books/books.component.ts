import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  status = '2';
  input1: any;
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

    this.bookForm = new FormGroup({
      book: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  getting() {
    const getData = this.bookForm.getRawValue();

    this.bookData.push(getData);
    this.input1 = '';
    this.input2 = '';
  }

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
