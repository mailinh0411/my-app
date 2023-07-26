import { Pipe, PipeTransform, Input } from '@angular/core';
import { Book, Books } from './data.books';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  @Input() bookSearch: Book[] = [];

  transform(books: Book[], searchNameBook: string, searchStatusBook: string): Book[] {
    if(searchNameBook && searchStatusBook){
      return books.filter(item => ((item.name.toLowerCase().indexOf(searchNameBook)) !== -1  && (item.status.indexOf(searchStatusBook))!== -1 ));
    }else if(!searchNameBook && searchStatusBook){
      return books.filter(item => (item.status.indexOf(searchStatusBook))!== -1)    
    }else if(searchNameBook && !searchStatusBook){
      return books.filter(item => (item.name.toLowerCase().indexOf(searchNameBook))!== -1)    
    }else{
      return books;
    }
  }

}
