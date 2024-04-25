import React, { useState } from 'react';
import { AccionProps } from '../../props/AccionProps';
import { Card, IconButton, Text } from 'react-native-paper';
import { Animated, StyleSheet, View } from 'react-native';
import { colors, globalStyles } from '../../config/themes/appThemes';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Componente funcional para representar una acción.
 * @param {AccionProps} accion Las propiedades de la acción.
 * @returns {JSX.Element} El componente de la acción.
 */
const Accion = ({ accion }: AccionProps) => {
    // Estado para controlar la visibilidad del contenido completo.
    const [showFullContent, setShowFullContent] = useState(false);
    // Estado para la animación de rotación del icono.
    const rotation = useState(new Animated.Value(0))[0];
    // Estado para la animación de altura del contenido.
    const height = useState(new Animated.Value(0))[0];

    // Función para animar la rotación y la altura del contenido.
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

    // Función para alternar la visibilidad del contenido.
    const toggleContent = () => {
        setShowFullContent(!showFullContent);
        animate();
    };

    return (
        <Card style={styles.container}>
            <Card.Title
                style={globalStyles.headerAcction}
                title={"Accion " + accion.id}
                titleStyle={styles.accionTitle}
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
            <View style={{ padding: 10 }}>
                <Text style={globalStyles.titleSection}>Observaciones: </Text>
                <Text style={globalStyles.label}>{accion.observaciones.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '\n\n')}</Text>
            </View>
            <Animated.View style={[globalStyles.content, { maxHeight: height.interpolate({ inputRange: [0, 1], outputRange: [0, 500] }) }]}>
                <Text style={globalStyles.label}>Tiempo: {accion.tiempo}</Text>
                <Text style={globalStyles.label}>Creado en: {accion.created_at}</Text>
                <Text style={globalStyles.label}>Actualizado en: {accion.updated_at}</Text>
            </Animated.View>
        </Card>
    );
}

// Estilos para el componente Accion.
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
    accionTitle: {
        fontSize: 22,
        marginTop: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.white
    }
})

export default Accion;