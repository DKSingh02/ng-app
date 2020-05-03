import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CharacterService } from '../core/character.service';

import * as CharacterActions from '../store/actions/character.action';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characters: any[];
  constructor(
    private store: Store<any>,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characterService
      .getCharacters()
      .subscribe((data) => (this.characters = data.results));
    // this.store.pipe(select('characters')).subscribe(
    //   state => console.log(state);
    // ));

    this.store
      .pipe(select('characters'))
      .subscribe((allCharacters) => console.log('Characters ' + allCharacters));
  }

  dispatchAction() {
    this.store.dispatch(new CharacterActions.getAllCharacters());
  }

  getData() {}
}
