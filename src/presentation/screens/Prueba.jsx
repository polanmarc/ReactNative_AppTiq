import React from 'react'
import { Text, View } from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton'
import { useNavigation } from "@react-navigation/native";

export const Prueba = () => {

    const navigation = useNavigation();

    const handleSudmit = () => {
        navigation.navigate("Login");
    }

    return (
        <View>
            <Text>Prueba</Text>
            <PrimaryButton
                onPress={handleSudmit}
                label="Enviar" />
        </View>
    )
}
