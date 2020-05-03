import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import {
  concatMap,
  switchMap,
  mergeMap,
  map,
  catchError,
} from 'rxjs/operators';

import * as CharactersActions from '../actions/character.action';
import { CharacterService } from '../../core/character.service';

@Injectable()
export class CharactersEffects {
  @Effect()
  getCharacters$ = this.actions$.pipe(
    ofType(CharactersActions.GET_ALL_CHARACTERS),
    switchMap(() =>
      this.characterService.getCharacters().pipe(
        map((res) => new CharactersActions.GetCharactersSuccess(res)),
        catchError((err) => of(new CharactersActions.GetCharactersError(err)))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
