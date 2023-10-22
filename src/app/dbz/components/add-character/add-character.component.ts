import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  @Output()
  newIte: EventEmitter<Character> = new EventEmitter()

  formItem: Character = {
    name: '',
    power: 0
  }

  emitirItem(): void {
    if(this.formItem.name.length === 0) return

    this.newIte.emit(this.formItem)

    this.formItem = { name: '', power: 0}
  }
}
