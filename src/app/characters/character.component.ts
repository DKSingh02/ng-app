import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CharacterService } from '../core/character.service';
import { Result } from '../core/types/characters';

import * as fromCharacters from '../store/selectors/characters.selectors';
import * as CharacterActions from '../store/actions/character.action';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characters: any[];
  characters$: Observable<Result[]>;
  constructor(
    private store: Store<any>,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {

    this.store.dispatch(new CharacterActions.getAllCharacters());
    // this.characterService
    //   .getCharacters()
    //   .subscribe((data) => (this.characters = data.results));
    // this.store.pipe(select('characters')).subscribe(
    //   state => console.log(state);
    // ));

    // this.store
    //   .pipe(select('characters'))
    //   .subscribe((allCharacters) => console.log('Characters ' + JSON.stringify(allCharacters)));

    // this.characters$ = this.store.pipe(
    //   select(fromCharacters.getAllCharacters)
    // ) as Observable<Result[]>;
    // this.characters$.subscribe((characters) =>
    //   console.log('Characters data: -' + JSON.stringify(characters))
    // );

    this.store
      .pipe(select(fromCharacters.getAllCharacters))
      .subscribe((characters) => {
        this.characters = characters;
      });
  }

  // dispatchAction() {
  //   this.store.dispatch(new CharacterActions.getAllCharacters());
  // }
}
