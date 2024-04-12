import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { colors, globalStyles } from "../../config/themes/appThemes";
import { PrimaryButton } from "./PrimaryButton";
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
                <Text style={[styles.labelTitle, { color: colorTitle }]}> {tiqSelected.descripcion} </Text>
            </View>
            <Text style={styles.label}> {tiqSelected.observaciones}</Text>
            <View>
                <PrimaryButton
                    onPress={handleTiqPress}
                    label="Abrir Tiq" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.sintelec,
        borderRadius: 5,
        padding: 10,
        margin: 15,
        marginBottom: 0,
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    itemContianer: {
        textAlign: 'center',
        width: '32%'
    },
    labelTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
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
