import { createContext } from 'react';
import { PaletteColors } from '../themes';

export interface ContextProps {
     themeDark: boolean;
     themePalette: PaletteColors;
     menuActive: boolean;
     setDarkTheme: (status: boolean) => void;
     setMenu: (status: boolean) => void;
}

export const GlobalContext = createContext({} as ContextProps);