import { Action } from '@ngrx/store';

export const GET_ALL_CHARACTERS = '[CHARACTERS] ALL_CHARACTERS';
export const GET_CHARACTERS_SUCCESS = '[CHARACTERS] GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_ERROR = '[CHARACTERS] GET_CHARACTERS_ERROR';

export class getAllCharacters implements Action {
  readonly type = GET_ALL_CHARACTERS;
}

export class GetCharactersSuccess implements Action {
  readonly type = GET_CHARACTERS_SUCCESS;
  constructor(public readonly payload: any) {}
}

export class GetCharactersError implements Action {
  readonly type = GET_CHARACTERS_ERROR;
  constructor(public readonly payload: any) {}
}

export type AllCharactersActions =
  | getAllCharacters
  | GetCharactersSuccess
  | GetCharactersError;
