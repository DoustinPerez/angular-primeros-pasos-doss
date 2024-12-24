import { Injectable } from '@angular/core';
import {v4 as uuid } from 'uuid';

console.log( '** ' + uuid());

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [{
      id: uuid(),
      name:'Krillin',
      power: 1000
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name:'Vegeta',
      power: 7500

    }];

    // onNewCharacter( character: Character ):void {

    //   const newCharacter: Character = {
    //     id: uuid(),
    //     name: character.name,
    //     power: character.power
    //   }
    addCharacter( character: Character ):void {

      const newCharacter: Character = { id: uuid(), ...character } // se esparcen todas su propiedades de character al objeto

      this.characters.push(newCharacter);

      console.log('MainPage');
      console.log(character)
    }

    //onDeleteCharacter(index:number) {
    //  this.characters.splice(index,1);
    deleteCharacterById(id:string) {
      this.characters = this.characters.filter( character => character.id != id );
    }

}
