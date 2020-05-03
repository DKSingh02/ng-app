import { Actions, Effect, ofType } from '@ngrx/effects';
import { concatMap, switchMap, mergeMap, map } from 'rxjs/operators';

import * as CharactersActions from '../actions/character.action';
import { CharacterService } from '../../core/character.service';

import { of,  } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CharactersEffects {

    @Effect()
    getCharacters$ = this.actions$.pipe(
        ofType(CharactersActions.GET_ALL_CHARACTERS),
        switchMap(() => 
         this.characterService.getCharacters().pipe(
             map((data) => new CharactersActions.GetCharactersSuccess(data))
         )
        )
        // switchMap(() => of(1,2,3))
        // switchMap(() => 
        //     toA
        // )
    );


    constructor(private actions$: Actions, 
        private characterService: CharacterService) {}
    
}