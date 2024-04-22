import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { colors, globalStyles, windowHeight, windowWidth } from "../../config/themes/appThemes";
import { PrimaryButton } from "../shared/PrimaryButton";
import { getColorPriority } from "../hooks/Functions";
import { PropsTiq } from "../../props/TiqProps"

/* interface Props {
    tiqSelected: {
        id: number;
        creador: number;
        asignado: number;
        descripcion: string;
        observaciones: string;
        prioridad: number;
    };
} */

export const Tiq = ({ tiq }: PropsTiq ) => {
    const navigation = useNavigation();
    const [colorTitle, setColorTitle] = useState('');

    useEffect(() => {
        if (tiq) {
            setColorTitle(getColorPriority(tiq.estado));
        }
    }, [tiq]);

    const handleTiqPress = () => {
        navigation.navigate("Tiq", { tiq: tiq });
    };

    return (
        <View>
            <View style={styles.containerHeaderTiq}>
                <View style={[styles.containerPriority, colorTitle && { backgroundColor: colorTitle }]}></View>
                <Text style={styles.labelTitle}>{tiq.descripcion}</Text>
            </View>
            <Text style={styles.label}>{ tiq.observaciones.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '\n\n') }</Text>
            <View style={styles.containerOpenTiq}>
                <PrimaryButton
                    onPress={handleTiqPress}
                    label="Abrir Tiq" />
            </View>
            {}
        </View>
    );
}


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
        borderRadius: 10,
        marginLeft: 30,
        marginHorizontal: 10, 
        marginVertical: 7
    }
});

/*

// === Warning Color linea 44: color: colorTitle ===

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ flex: 1, height: 1, backgroundColor: colors.colorTheme, marginVertical: 20 }} />
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
        <Text style={[styles.labelTitle, { color: colorTitle }]}>{tiqSelected.descripcion}</Text>
    </View>
    <View style={{ flex: 1, height: 1, backgroundColor: colors.colorTheme }} />
</View>

<View style={styles.headerContainer}>
    <Text style={[styles.label, styles.itemContianer]}>ID: {tiqSelected.id}</Text>
    <Text style={[styles.label, styles.itemContianer]}>Creador: {tiqSelected.creador}</Text>
</View>

*/
