import { Characters, Result, Info } from '../../core/types/characters';
import * as CharactersActions from '../actions/character.action';

export interface CharactersState {
  info: Info;
  characters: Result[];
  error: string;
}

const initialState: CharactersState = {
  info: null,
  characters: [],
  error: '',
};

export function characters(
  state = initialState,
  action: CharactersActions.AllCharactersActions
) {
  switch (action.type) {
    case CharactersActions.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        info: action.payload.info,
        characters: action.payload.results,
        error: '',
      };
    case CharactersActions.GET_CHARACTERS_ERROR:
      return {
        ...state,
        info: null,
        characters: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
