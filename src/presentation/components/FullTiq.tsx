import React, { useState } from "react";
import { StyleSheet, Text, Animated, View } from "react-native";
import { colors, globalStyles } from "../../config/themes/appThemes";
import { Avatar, Button, Card, FAB, IconButton } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PrimaryButton } from '../shared/PrimaryButton';

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
                    style={styles.header}
                    title={"Tiquet " + tiqSelected.id}
                    titleStyle={styles.title}
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
                <View style={styles.content}>
                    <Text style={styles.titleSection}>Titulo Tiq: </Text>
                    <Text style={styles.label}>{tiqSelected.descripcion}</Text>
                    <Text style={styles.titleSection}>Observacion: </Text>
                    <Text style={styles.label}>{tiqSelected.observaciones}</Text>
                </View>
                <Animated.View style={[styles.content, { maxHeight: height.interpolate({ inputRange: [0, 1], outputRange: [0, 500] }) }]}>
                    <Text style={styles.label}>Prioridad: {tiqSelected.prioridad}</Text>
                    <Text style={styles.label}>Tipo: {tiqSelected.tipotiq}</Text>
                    <Text style={styles.label}>Fecha inicio: {tiqSelected.created_at}</Text>
                    <Text style={styles.label}>Fecha final: {tiqSelected.fecha_final}</Text>
                    <Text style={styles.label}>Estado: {tiqSelected.estado}</Text>
                </Animated.View>
            </Card>
        </View>
    );
}

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
    header: {
        backgroundColor: colors.sintelec,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.white
    },
    titleSection: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark
    },
    content: {
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: colors.dark
    },
});
