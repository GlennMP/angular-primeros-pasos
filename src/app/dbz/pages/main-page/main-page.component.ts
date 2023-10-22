import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzSer: DbzService) { }

  get items(): Character[] {
    return [ ...this.dbzSer.characters] 
  }

  eliminarItem(id: string): void {
    this.dbzSer.eliminarItem(id)
  }

  newItem(item: Character): void {
    this.dbzSer.newItem(item)
  }

}
