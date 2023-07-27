import { Injectable } from '@angular/core';
import { Book, Books } from './data.books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _books: Book[] = Books;
  public get books(): Book[] {
    return this._books;
  }
  public set books(value: Book[]) {
    this._books = value;
  }

  constructor() { this.books; }

  updateBook(book: Book){
    if(!book.name){
      alert("Tên sách không được để trống"); 
      return;
    }
    let bookIndex = this.books.findIndex(x => x.id == book.id);
    this.books[bookIndex].name = book.name;
    this.books[bookIndex].status = book.status;
  }

  deleteBook(book: Book) : Book[]{
    return this.books = this.books.filter((u) => u !== book);
  }

  addBook(book: Book){
    this.books.push(book);
  }
}
