// Header.tsx
import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from "../../config/themes/appThemes";
import HamburguerMenu from "../shared/HamburguerMenu";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Props para el componente Header.
 */
interface Props {
    title: string; // El título que se mostrará en el encabezado.
}

/**
 * Componente funcional para representar el encabezado de la aplicación.
 * @param {Props} title El título que se mostrará en el encabezado.
 * @returns {JSX.Element} El componente Header.
 */
export const Header = ({ title }: Props) => {
    const navigation = useNavigation();

    // Función para retroceder a la pantalla anterior.
    const goBack = () => {
        navigation.goBack();
    };

    // Componente funcional para renderizar el logo del encabezado.
    const HeaderLogo = () => {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={require('../../config/img/icono-sin-fondo.png')}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    return (
        <View style={styles.headerContainer}>
            {/* Icono para retroceder a la pantalla anterior */}
            <Icon style={styles.goBack} size={30} color={colors.dark} onPress={goBack} name="arrow-back-outline" />
            {/* Logo del encabezado */}
            <HeaderLogo />
            {/* Menú hamburguesa */}
            <HamburguerMenu />
        </View>
    )
}

// Estilos para el componente Header.
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    goBack: {
        marginRight: 20
    },
    title: {
        padding: 5,
        paddingLeft: 10,
        fontSize: 22,
        color: colors.dark
    },
    headerContainer: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})