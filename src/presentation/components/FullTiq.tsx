import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../config/themes/appThemes";

interface Props {
    tiqSelected: {
        id: number;
        creador: number;
        asignado: number;
        inv_asignado: any;
        prioridad: number;
        tipotiq: number;
        clasificacion: string;
        descripcion: string;
        observaciones: any;
        fecha_final: string;
        estado: number;
        planificado: any;
        planificado2: any;
        created_at: string;
        updated_at: string;
    };
}

export const FullTiq = ({ tiqSelected }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>ID: {tiqSelected.id}</Text>
            <Text style={styles.label}>Creador: {tiqSelected.creador}</Text>
            <Text style={styles.label}>Asignado: {tiqSelected.asignado}</Text>
            <Text style={styles.label}>Prioridad: {tiqSelected.prioridad}</Text>
            <Text style={styles.label}>Tipo: {tiqSelected.tipotiq}</Text>
            <Text style={styles.label}>Titulo Tiq: {tiqSelected.descripcion}</Text>
            <Text style={styles.label}>Observacion: {tiqSelected.observaciones}</Text>
            <Text style={styles.label}>Fecha inicio: {tiqSelected.created_at}</Text>
            <Text style={styles.label}>Fecha final: {tiqSelected.fecha_final}</Text>
            <Text style={styles.label}>Estado: {tiqSelected.estado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
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
    label: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Arial',
        color: '#333',
    },
});
