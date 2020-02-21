import { Component, OnInit, Input } from '@angular/core';
import { Book } from './../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  selectedBook;

  books: Book[] = [
    {
      bookId: 10,
      bookBy: 'Leo Tolstoy',
      bookTitle: 'Anna Karenin',
      bookPages: 540,
      bookSubjects: 'Fiction, Adultery, Married women, Social life and customs, Social conditions, Upper class women, Russian literature, Anna Karenina (Fictitious character), Upper class, German language books, Classic Literature, Literature, Drama, Non-English Fiction, Romance, Translations into English, Russian fiction, open_syllabus_project, Long Now Manual for Civilization',
      bookImgPath: null,
      bookPublisher: null,
      bookDescription: 'Described by William Faulkner as the best novel ever written and by Fyodor Dostoevsky as “flawless,” Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and thereby exposes herself to the hypocrisies of society. Set against a vast and richly textured canvas of nineteenth-century Russia, the novel\'\s seven major characters create a dynamic imbalance, playing out the contrasts of city and country life and all the variations on love and family happiness.',
    },
    {
      bookId: 3,
      bookBy: 'Nikolai Tolstoy',
      bookTitle: 'PATRICK O\'\BRIAN <span>THE MAKING OF THE NOVELIST<span>',
      bookPages: 620,
      bookSubjects: 'English Novelists, Biography',
      bookImgPath: null,
      bookPublisher: 'Century',
      bookDescription: 'There\'\s no description for this book yet.',
    },
    {
      bookId: 15,
      bookBy: 'Nikolai Tolstoy',
      bookTitle: 'The Tolstoys, twenty-four generations of Russian history, 1353-1983',
      bookPages: 250,
      bookSubjects: 'Biography, History',
      bookImgPath: null,
      bookPublisher: 'W. Morrow',
      bookDescription: 'There\s\ no description for this book yet.',
    },
    {
      bookId: 20,
      bookBy: 'Nikolai Tolstoy',
      bookTitle: 'The half-mad lord',
      bookPages: 120,
      bookSubjects: 'Nobility, Biography, Social life and customs, Manners and customs',
      bookImgPath: null,
      bookPublisher: 'Holt, Rinehart and Winston ',
      bookDescription: 'There\'\s no description for this book yet.',
    },
    {
      bookId: 600,
      bookBy: 'Henry James Jr.',
      bookTitle: 'The Reverberator',
      bookPages: 200,
      bookSubjects: 'Classic Literature, Fiction, Social life and customs, Manners and customs',
      bookImgPath: null,
      bookPublisher: 'Grove Press',
      bookDescription: '"I guess my daughter\'\s in here," the old man said leading the way into the little salon de lecture. He was not of the most advanced age, but that is the way George Flack considered him, and indeed he looked older than he was. George Flack had found him sitting in the court of the hotel - he sat a great deal in the court of the hotel - and had gone up to him with characteristic directness and asked him for Miss Francina.',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(book : Book) {
    //console.log(book);
    this.selectedBook = book;
  }

}
