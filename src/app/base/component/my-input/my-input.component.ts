import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent {
  @Input() titleInput: string = '';
  @Input() valueInput: string = '';

  @Output() newItemInput = new EventEmitter<string>();

  changeInput(value: string){
    this.newItemInput.emit(value);
  }
}
