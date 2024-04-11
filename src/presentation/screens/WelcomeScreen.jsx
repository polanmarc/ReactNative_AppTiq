import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
const navigation = useNavigation();
    const spinValue = new Animated.Value(0);
    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        )
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../config/img/icono-sin-fondo.png')}
                style={[styles.logo, { transform: [{ rotate: spin }] }]}
            />
            <Text style={styles.title}>Bienvenido a Sintelec</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
