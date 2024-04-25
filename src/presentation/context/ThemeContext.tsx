import { PropsWithChildren, createContext } from 'react';

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

/**
 * Contexto del tema de la aplicación.
 * Proporciona información sobre si la aplicación está en modo oscuro y el tema actual.
 */
export const ThemeContext = createContext({
    isDark: false, // Indica si la aplicación está en modo oscuro.
    theme: LightTheme, // El tema actual de la aplicación.
});

/**
 * Proveedor de contexto del tema.
 * Este componente envuelve la aplicación y proporciona el tema actual a los componentes hijos.
 * @param children Los componentes hijos que deben estar envueltos por el proveedor de contexto.
 */
export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    // Obtener el esquema de color del dispositivo (oscuro o claro).
    const colorScheme = useColorScheme();
    // Determinar si el esquema de color es oscuro.
    const isDark = colorScheme === 'dark';
    // Seleccionar el tema adecuado según el esquema de color.
    const theme = isDark ? DarkTheme : LightTheme;

    return (
        // Proveedor de temas de Material UI.
        <PaperProvider theme={theme}>
            {/* Contenedor de navegación de React Navigation con el tema actual. */}
            <NavigationContainer theme={theme}>
                {/* Proveedor de contexto de temas para los componentes hijos. */}
                <ThemeContext.Provider value={{
                    isDark, // Proporciona información sobre si la aplicación está en modo oscuro.
                    theme // Proporciona el tema actual a los componentes hijos.
                }}>
                    {children}
                </ThemeContext.Provider>
            </NavigationContainer>
        </PaperProvider>
    );
}