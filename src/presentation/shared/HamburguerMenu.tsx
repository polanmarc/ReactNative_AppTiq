import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { changeColorSchema, colors } from '../../config/themes/appThemes';

const HamburguerMenu = () => {
    const [visible, setVisible] = useState(false);
    const [colorScheme, setColorScheme] = useState('light'); // Estado para almacenar el esquema de color actual

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    // Función para cambiar el esquema de color
    const toggleColorSchema = () => {
        const newColorScheme = colorScheme === 'light' ? 'dark' : 'light'; // Cambia entre light y dark
        changeColorSchema({ color: newColorScheme }); // Cambia el esquema de color
        setColorScheme(newColorScheme); // Actualiza el estado del esquema de color
    };

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<View><Icon size={35} color={colors.dark} onPress={openMenu} name="menu-outline" /></View>}
                    contentStyle={styles.menuContent}
                    style={styles.menu}
                    statusBarHeight={25}
                >
                    {/* Pasa la función toggleColorSchema como onPress para el Item 1 */}
                    <Menu.Item onPress={toggleColorSchema} title="Item 1" />
                    <Menu.Item onPress={() => { }} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Item 3" />
                </Menu>
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },    
    menuContent: {
        backgroundColor: '#fff',
        padding: 8,
    },
    menu: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        overflow: 'hidden',
        top: '100%',
        left: '40%'
    },
});

export default HamburguerMenu;
