import React, { useState } from "react";
import { StyleSheet, Text, Animated, View } from "react-native";
import { colors, globalStyles } from "../../config/themes/appThemes";
import { Card, IconButton } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getPriority } from "../hooks/Functions";
import Accion from "./Accion";


/**
 * Props para el componente FullTiq.
 */
interface Props {
    tiqSelected: {
        // Propiedades de la tiq seleccionada.
        id: number;
        prioridad: number;
        tipotiq: number;
        descripcion: string;
        observaciones: any;
        created_at: string;
        fecha_final: string;
        estado: number;
        acciones: {
            // Propiedades de cada acción asociada a la tiq.
            id: number;
            descripcion: string;
            observaciones: string;
            tiempo: string;
            created_at: string;
            updated_at: string;
            interna: number;
            cliente: number;
            facturable: number;
            documentos: any[];
        }[];
    };
}

/**
 * Componente funcional para mostrar una vista completa de un tiquet.
 * @param {Props} tiqSelected El tiquet seleccionado para mostrar.
 * @returns {JSX.Element} El componente FullTiq.
 */
export const FullTiq = ({ tiqSelected }: Props) => {
    const [showFullContent, setShowFullContent] = useState(false);
    const rotation = useState(new Animated.Value(0))[0];
    const height = useState(new Animated.Value(0))[0];

    const animate = () => {
        Animated.timing(rotation, {
            toValue: showFullContent ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(height, {
            toValue: showFullContent ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
        animate();
    };

    return (
        <View>
            <Card style={styles.container}>
                <Card.Title
                    style={globalStyles.header}
                    title={"Tiquet " + tiqSelected.id}
                    titleStyle={globalStyles.litleTitle}
                    right={(props) => (
                        <IconButton
                            {...props}
                            icon={() => (
                                <Animated.View
                                    style={{
                                        transform: [
                                            {
                                                rotate: rotation.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: ['0deg', '180deg'],
                                                }),
                                            },
                                        ],
                                    }}
                                >
                                    <Ionicons name="arrow-down-outline" size={24} color={colors.white} />
                                </Animated.View>
                            )}
                            onPress={toggleContent}
                        />
                    )}
                />
                <View style={globalStyles.content}>
                    <Text style={globalStyles.titleSection}>Titulo Tiq: </Text>
                    <Text style={globalStyles.label}>{tiqSelected.descripcion}</Text>
                    <Text style={globalStyles.titleSection}>Observacion: </Text>
                    <Text style={globalStyles.label}>{tiqSelected.observaciones.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '\n\n')}</Text>
                </View>
                <Animated.View style={[globalStyles.content, { maxHeight: height.interpolate({ inputRange: [0, 1], outputRange: [0, 500] }) }]}>
                    <Text style={globalStyles.label}>Prioridad: {tiqSelected.prioridad === null ? "No asignada." : tiqSelected.prioridad}</Text>
                    <Text style={globalStyles.label}>Tipo: {tiqSelected.tipotiq}</Text>
                    <Text style={globalStyles.label}>Fecha inicio: {tiqSelected.created_at}</Text>
                    <Text style={globalStyles.label}>Fecha final: {tiqSelected.fecha_final === null || tiqSelected.fecha_final === '' ? "No cerrada" : tiqSelected.prioridad}</Text>
                    <Text style={globalStyles.label}>Estado: {getPriority(tiqSelected.estado)}</Text>
                </Animated.View>
            </Card>
            {tiqSelected.acciones && tiqSelected.acciones.length > 0 && tiqSelected.acciones.map((element) => (
                <Accion accion={element} key={element.id} />
            ))}
        </View>
    );
}

// Estilos para el componente FullTiq.
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
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