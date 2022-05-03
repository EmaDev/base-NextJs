import { FC, useReducer } from 'react';
import { PaletteColors, paletteDark, paletteLight } from '../themes';
import { GlobalContext, globalReducer } from './index';

export interface GlobalState {
    themeDark: boolean;
    themePalette: PaletteColors;
    menuActive: boolean;
}
const UI_INITIAL_STATE: GlobalState = {
    themeDark: false,
    themePalette: {
        bgDefault: '#F0F0F0',
        bgPrimary: '#E8E8E8',
        bgSecondary: '#292E46',
        bgSepartor: '#5B5F7F',
        textDefault: '#0C0C0C',
        textPrimary: '#1A1B1B',
        textPrimaryLigth: '#212121',
        textPrimaryDark: '#131313',
        textSecondary: '#D8621F',
        white: '#e1e1e1'
    },
    menuActive: false
}

export const GlobalProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(globalReducer, UI_INITIAL_STATE);


    const setDarkTheme = (status: boolean) => {

        if (status) {
            dispatch({ type: '[GLOBAL] - Change theme', payload: { dark: status, palette: paletteDark } });
        } else {
            dispatch({ type: '[GLOBAL] - Change theme', payload: { dark: status, palette: paletteLight } })
        }
    };

    const setMenu = (status: boolean) => {
        dispatch({ type: '[GLOBAL] - Menu open/close', payload: status });
    }

    return (
        <GlobalContext.Provider
            value={{
                ...state,
                setDarkTheme,
                setMenu
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}