import { Image, StyleSheet, Text, View } from "react-native"
import { colors } from "../../config/themes/appThemes";

interface Props {
    title: string
}

export const Header = ({ title } : Props) => {

    const HeaderLogo = () => {
        return (
            <View style={ styles.container }>
                <Image
                    style={ styles.icon }
                    source={require('../../config/img/icono-sin-fondo.png')}
                />
                <Text style={ styles.title }>{title}</Text>
            </View>
        );
    }

    return (
        <View>
            <HeaderLogo />
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
    title: {
        padding: 5,
        paddingLeft: 10, 
        fontSize: 22,
        color: colors.colorTheme
    }
})
