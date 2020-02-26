import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  selectedBook;
  books;



  constructor(private bookService: BookService) {
    this.books = this.bookService.getBook();
  }

  ngOnInit(): void {
  }

  onClick(book : Book) {
    console.log(book);
    this.selectedBook = book;
  }

}
