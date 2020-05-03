import { Action } from '@ngrx/store';


export const GET_ALL_CHARACTERS = '[CHARACTERS] ALL_CHARACTERS';
export const GET_CHARACTERS_SUCCESS = '[CHARACTERS] GET_CHARACTERS_SUCCESS';
// export const GET_CUSTOMER_ERROR = '[Customer] GET_CUSTOMER_ERROR';



export class getAllCharacters implements Action {
    readonly type = GET_ALL_CHARACTERS;
}

export class GetCharactersSuccess implements Action {
    readonly type = GET_CHARACTERS_SUCCESS;
    constructor(public readonly payload: any) {}
  }