import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent {
  @Input() titleSelect: string = '';
  @Input() listSelect: string[] = [];
  @Input() selectedOption: string = '';

  @Output() newItemSelect = new EventEmitter<string>();

  changeSelect(value:string){
    this.newItemSelect.emit(value);
  }
}
