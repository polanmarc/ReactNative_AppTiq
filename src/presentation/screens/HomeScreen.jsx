import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { PrimaryButton } from '../shared/PrimaryButton'
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from 'react-native';
import { colors, globalStyles } from '../../config/themes/appThemes';

/**
 * Pantalla principal de la aplicación.
 * @returns {JSX.Element} El componente de la pantalla principal.
 */
export const HomeScreen = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const imgRute = colorScheme === 'dark' ? require('../../config/img/fondo-claro.png') : require('../../config/img/fondo-oscuro-fullscreen.png');

    // Función para manejar el evento de enviar.
    const handleSudmit = () => {
        navigation.navigate("Login");
    }

    return (
        <ImageBackground source={imgRute} style={globalStyles.backgroundImg} resizeMode="cover" >
            <View style={globalStyles.backgroundImgOpacity} />
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>SINTELEC</Text>
                {/* Botón para iniciar sesión */}
                <PrimaryButton
                    onPress={handleSudmit}
                    label="Iniciar Sesión" />
            </View>
        </ImageBackground>
    )
}
