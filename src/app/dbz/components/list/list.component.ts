import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  eliminarItem: EventEmitter<string> = new EventEmitter();

  @Input()
  itemsList: Character[]=[]

  emitirIndex(index?:string):void{
    this.eliminarItem.emit(index)
  }

}
