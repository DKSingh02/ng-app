import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState } from '../reducers/character.reducer';

const getCharactersFeatureState = createFeatureSelector<CharactersState>(
  'characters'
);

export const getAllCharacters = createSelector(
  getCharactersFeatureState,
  (state) => state.characters
);

export const getCharactersInfo = createSelector(
  getCharactersFeatureState,
  (state) => state.info
);

export const getError = createSelector(
  getCharactersFeatureState,
  (state) => state.error
);
