import { Injectable } from '@angular/core';
import { BOOKS } from './bookMock'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBook() {
    return BOOKS;
  }

}
