// Header.tsx
import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from "../../config/themes/appThemes";
import HamburguerMenu from "../shared/HamburguerMenu";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string
}

export const Header = ({ title }: Props) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const HeaderLogo = () => {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={require('../../config/img/icono-sin-fondo.png')}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    return (
        <View style={styles.headerContainer}>
            <Icon style={styles.goBack} size={30} onPress={goBack} name="arrow-back-outline" />
            <HeaderLogo />
            <HamburguerMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    goBack: {
        marginRight: 20
    },
    title: {
        padding: 5,
        paddingLeft: 10,
        fontSize: 22,
        color: colors.colorTheme
    },
    headerContainer: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
