import { Platform, StyleSheet, useColorScheme } from "react-native"

export const useSchema = () => {
    const colorScheme = useColorScheme();
    return colorScheme;
}

interface PropsChangeColorSchema {
    color : 'light' | 'dark';
}

export const changeColorSchema = ({ color } : PropsChangeColorSchema) => {
    const colorScheme = color;
    return colorScheme;
}

export const colors = {
    sintelec: '#008b8b',
    dark: '#3d3d3d',
    white: '#f5f5f5',
    redError: '#ff0000',
    colorTheme: useSchema() === 'dark' ? '#f5f5f5' : '#3d3d3d',
    colorThemeInvers: useSchema() === 'dark' ? '#3d3d3d' : '#f5f5f5',
}

export const globalStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: colors.colorTheme,
        fontWeight: 'bold',
        fontSize: 60,
        paddingBottom: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    backgroundImg: {
        flex: 1,
        zIndex: 1,
        justifyContent: 'center',
    },
    backgroundImgOpacity: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: useSchema() === 'dark' ? 'rgba(0,0,0,0.4)' : 'transparent',
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center'
    },
    error: {
        color: colors.redError
    },
    fixLeftDownButton: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 15 : 0,
    }
});

/*

// Expo Font Family

import { useFonts, Alegreya_700Bold } from '@expo-google-fonts/alegreya';


let [fontsLoaded] = useFonts({
    Alegreya_700Bold,
});

if (!fontsLoaded) {
    // Las fuentes aún no se han cargado
    return null; // O cualquier otro indicador de carga que desees mostrar
} else {
    console.log("Estan las fuentes")
} 

*/