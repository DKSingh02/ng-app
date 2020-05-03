

import * as Actions from '../actions/character.action';

// export function characters(state = [], action: any) {
//     switch(action.type) {
//         case Actions.GET_ALL_CHARACTERS : 
//         return [...state, action.payload.results];
//         default: 
//         return state;
//     }
// }

export function characters(state = [], action: any) {
    switch(action.type) {
        case Actions.GET_CHARACTERS_SUCCESS : 
        return [...state, action.payload.results];
        default: 
        return state;
    }
}