import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import users from '../../database/users.json';
import { PrimaryButton } from "../shared/PrimaryButton";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, globalStyles } from "../../config/themes/appThemes";
import { getRouteBackground } from '../hooks/Functions';

/**
 * Pantalla de inicio de sesión.
 * @returns {JSX.Element} El componente de la pantalla de inicio de sesión.
 */
export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigation = useNavigation();

    // Función para manejar el envío del formulario de inicio de sesión.
    const handleSudmit = () => {
        const user = users.find(user => user.email === email);
        const newErrors = {};

        // Validación del formulario de inicio de sesión.
        if (!email) {
            newErrors.email = "Por favor, introduce tu dirección de correo electrónico.";
        }

        if (!password) {
            newErrors.password = "Por favor, introduce tu contraseña.";
        }

        if (user) {
            if (user.password !== password) {
                newErrors.password = "La contraseña es incorrecta.";
            }
        } else {
            newErrors.email = "No se encontró ningún usuario con este correo electrónico.";
        }

        // Si no hay errores, se inicia sesión y se navega a la siguiente pantalla.
        if (Object.keys(newErrors).length === 0) {
            console.log("Usuario encontrado");
            navigation.navigate("Tiqs", { userLogged: user });
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <ImageBackground source={getRouteBackground()} style={globalStyles.backgroundImg} resizeMode="cover" >
            <View style={globalStyles.backgroundImgOpacity} />
            <View style={styles.container}>
                <Text style={globalStyles.title}>Login</Text>
                <View style={styles.row}>
                    <Icon style={styles.icono} name="mail-outline" size={35} />
                    <TextInput
                        placeholder="Email"
                        value={email}
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                {errors.email &&
                    <View style={styles.errorContainer}>
                        <Text style={globalStyles.error}>{errors.email}</Text>
                    </View>}
                <View style={styles.row}>
                    <Icon style={styles.icono} name="key-outline" size={35}></Icon>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                {errors.password &&
                    <View style={styles.errorContainer}>
                        <Text style={globalStyles.error}>{errors.password}</Text>
                    </View>}

                {/* Botón para enviar el formulario de inicio de sesión */}
                <PrimaryButton
                    onPress={handleSudmit}
                    label="Enviar" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    icono: {
        marginRight: 10
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
        color: colors.colorTheme
    }
});
