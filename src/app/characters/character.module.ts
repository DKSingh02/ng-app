import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './character-list/character-list.component';



@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  imports: [
    CommonModule
  ],
  exports: [CharacterComponent]
})
export class CharacterModule { }
