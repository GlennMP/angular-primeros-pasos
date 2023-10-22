import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = []

 newItem(item:Character):void{
  // debugger
  const nuevoItem: Character = { id:uuid(), ...item }
  this.characters.push(nuevoItem)
  console.log(this.characters)
 }

 eliminarItem(index:string):void{
  //  this.characters.splice(index,1)
  this.characters = this.characters.filter( x => x.id != index)
 }

  
}
