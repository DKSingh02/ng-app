import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CharactersEffects } from './effects/characters.effects';

import * as CharacterReducers from './reducers/character.reducer';

@NgModule({
    imports: [ CommonModule,  
        HttpClientModule,
        StoreModule.forFeature('characters', CharacterReducers.characters),
        EffectsModule.forFeature([CharactersEffects])
    ],
    providers: [],
    exports: [StoreModule, EffectsModule]
})

export class CharacterStoreModule{};