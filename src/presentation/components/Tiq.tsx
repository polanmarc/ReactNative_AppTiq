import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { colors, globalStyles } from "../../config/themes/appThemes";
import { PrimaryButton } from "../shared/PrimaryButton";
import { getColorPriority } from "../hooks/Functions";


interface Props {
    tiqSelected: {
        id: number;
        creador: number;
        asignado: number;
        descripcion: string;
        observaciones: string;
        prioridad: number;
    };
}

export const Tiq = ({ tiqSelected }: Props) => {
    const navigation = useNavigation();
    const [colorTitle, setColorTitle] = useState('')

    useEffect(() => {
        setColorTitle(getColorPriority(tiqSelected.prioridad));
    }, []);

    const handleTiqPress = () => {
        navigation.navigate("Tiq", { tiq: tiqSelected });
    };

    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[styles.labelTitle, colorTitle && { color: colorTitle }]}> {tiqSelected.descripcion} </Text>
            </View>
            <Text style={styles.label}> {tiqSelected.observaciones}</Text>
            <View style={styles.containerOpenTiq}>
                <PrimaryButton
                    onPress={handleTiqPress}
                    label="Abrir Tiq" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    containerOpenTiq: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    labelTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: colors.dark
    },
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
