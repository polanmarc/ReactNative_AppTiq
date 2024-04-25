import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { colors, windowWidth } from "../../config/themes/appThemes";
import { PrimaryButton } from "../shared/PrimaryButton";
import { getColorPriority } from "../hooks/Functions";
import { PropsTiq } from "../../props/TiqProps"


/**
 * Componente funcional para representar un elemento de lista de tiquets.
 * @param {PropsTiq} tiq Las propiedades del tiquet.
 * @returns {JSX.Element} El componente Tiq.
 */
export const Tiq = ({ tiq }: PropsTiq) => {
    const navigation = useNavigation();
    const [colorTitle, setColorTitle] = useState('');

    useEffect(() => {
        if (tiq) {
            setColorTitle(getColorPriority(tiq.estado));
        }
    }, [tiq]);

    // Función para manejar el evento de presionar el tiquet.
    const handleTiqPress = () => {
        navigation.navigate("Tiq", { tiq: tiq });
    };

    return (
        <View>
            {/* Encabezado del tiquet */}
            <View style={styles.containerHeaderTiq}>
                <View style={[styles.containerPriority, colorTitle && { backgroundColor: colorTitle }]}></View>
                <Text style={styles.labelTitle}>{tiq.descripcion}</Text>
            </View>
            {/* Observaciones del tiquet */}
            <Text style={styles.label}>{tiq.observaciones.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '\n\n')}</Text>
            {/* Botón para abrir el tiquet */}
            <View style={styles.containerOpenTiq}>
                <PrimaryButton
                    onPress={handleTiqPress}
                    label="Abrir Tiq" />
            </View>
        </View>
    );
}

// Estilos para el componente Tiq.
const styles = StyleSheet.create({
    containerHeaderTiq: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        maxWidth: windowWidth - 80
    },
    containerOpenTiq: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    labelTitle: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 5,
        color: colors.dark
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: colors.dark
    },
    containerPriority: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 30,
        marginHorizontal: 10,
        marginVertical: 7
    }
});