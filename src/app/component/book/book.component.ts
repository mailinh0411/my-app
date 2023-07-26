import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/data.books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  form!: FormGroup;
  booksCurrent: Book[] = [];  
  listSelect : string[] = ["Chưa đọc", "Đã đọc"]

  constructor(private fb: FormBuilder, private bookService: BookService) {}

  ngOnInit(){
    this.form = this.fb.group({
      books: this.fb.array([]),
    });
    this.booksCurrent = this.bookService.books;
    this.addBook();
  }

  get books() : FormArray {
    return this.form.get("books") as FormArray;
  }

  closeModal(){    
    this.books.clear();
    this.addBook();
  }

  newBook() : FormGroup{
    return this.fb.group({
      id: '',
      name: '',
      purchaseDate: '',
      status: '',
    })
  }

  addBook(){
    this.books.push(this.newBook());
  }

  removeBook(index : number){
    this.books.removeAt(index);
  }

  saveBooks(){
    let booksNew : Book[] = [];
    booksNew = booksNew.concat(this.booksCurrent);
    let isCheckAddError : boolean = true;
    let book: Book;
    for(let i = 0; i < this.books.controls.length; i++){      
      let element = this.books.controls[i];
      book = {id: parseInt(element.value.id), name: element.value.name, purchaseDate: element.value.purchaseDate, status: element.value.status};
      if(!this.validateBook(book, booksNew)){
        isCheckAddError = false;
        break;
      }
      booksNew.push(book);      
    }
    if(isCheckAddError){
      this.bookService.books = booksNew;
      this.closeModal();
    }
  }

  validateBook(book: Book, list: Book[]) : boolean{
    if(list.findIndex((u) => u.id === book.id) >= 0){
      alert("Id không được trùng.");
      return false;
    }
    if(book.id.toString().length > 5){
      alert("Số ký tự của id phải <= 5.");
      return false;
    }
    if(isNaN(book.id)){
      alert("Id phải là số.");
      return false;
    }
    if(!book.name){
      alert("Tên sách không được để trống.");
      return false;
    }   
    const date = new Date(book.purchaseDate);
    const now = new Date();
    if(date > now){
      alert("Ngày mua phải nhỏ hơn ngày hiện tại.");
      return false;
    } 
    return true;
  }
}
