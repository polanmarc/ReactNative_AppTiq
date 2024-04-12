import { StyleSheet, useColorScheme } from "react-native"

const colorScheme = useColorScheme();

export const colors = {
    sintelec: '#008b8b',
    dark: '#3d3d3d',
    white: '#f5f5f5',
    colorTheme: colorScheme === 'dark' ? '#f5f5f5' : '#3d3d3d',
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
        // borderWidth: 0.5,
        // borderColor: colors.sintelec,
        backgroundColor: '#f0f0f0',
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