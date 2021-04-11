import { Action } from '@ngrx/store';

export function simpleReducer(state = 'Hello world', action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case 'SPANISH':
            return state = 'Hola Mundo'
        case 'FRENCH':
            return state = 'Bonjour le monde';
        default:
            return state;    
    }
}