import { Image, StyleSheet, Text, View } from "react-native"
import { colors } from "../../config/themes/appThemes";


export const Header = () => {

    const HeaderLogo = () => {
        return (
            <View style={ syles.container }>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../config/img/icono-sin-fondo.png')}
                />
                <Text style={{ color: 'white', padding: 5, fontSize: 22 }}>Home</Text>
            </View>
        );
    }

    return (
        <View>
            <HeaderLogo />
        </View>
    )
}

const syles = StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        alignItems: 'center' 
    }, 
    title: {
        color: colors.colorTheme
    }
})
