import { PaletteColors } from '../themes';
import {GlobalState} from './index';

type GlobalActionType =
  | {type: '[GLOBAL] - Change theme', payload: {dark: boolean, palette: PaletteColors } }
  | {type: '[GLOBAL] - Menu open/close', payload: boolean}


export const globalReducer = (state: GlobalState, action:GlobalActionType ) => {

  switch (action.type) {
    case '[GLOBAL] - Change theme':
      return{
        ...state,
        themeDark: action.payload.dark,
        themePalette: action.payload.palette
      }
    case '[GLOBAL] - Menu open/close':
      return{
        ...state,
        menuActive: action.payload
      }
  
    default:
      return state;
  }
}