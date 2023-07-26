import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BookService } from 'src/app/book.service';

import { Book, Books } from 'src/app/data.books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  books: Book[] = [];
  titleRead: string = "Đã đọc";
  isShowUpdate: boolean = true;
  listStatusReadBook: string[] = ['Đã đọc', 'Chưa đọc'];
  
  isEditable : boolean = false;
  editIndex : number | null = null;
  nameBookToEdit : string = '';
  statusBookToEdit: string = ''; 

  searchNameBook : string = '';
  searchStatusBook : string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {   
    this.getBooks();
  }

  getBooks(){
    this.books = this.bookService.books;
  }

  deleteBook(book:Book){
    console.log("Book:" + book.id)
    this.books = this.books.filter((u) => u !== book);
  }

  updateBook(book:Book){
    this.isEditable = true;
    this.editIndex = book.id;
    this.nameBookToEdit = book.name;
    this.statusBookToEdit = book.status; 
  }

  saveBook(){
    if(!this.nameBookToEdit){
      alert("Tên sách không được để trống"); 
      return;
    }
    let bookIndex = this.books.findIndex(x => x.id == this.editIndex);
    this.books[bookIndex].name = this.nameBookToEdit;
    this.books[bookIndex].status = this.statusBookToEdit;
    this.isEditable = false;
  }

  valueSearchName(value:string){    
    this.searchNameBook = value;
  }

  valueSearchStatus(value:string){
    this.searchStatusBook = value;  
  }

 
}
