import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const HamburguerMenu = () => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<View><Icon size={35} onPress={openMenu} name="menu-outline" /></View>}
                    contentStyle={styles.menuContent}
                    style={styles.menu}
                    statusBarHeight={25}
                >
                    <Menu.Item onPress={() => { }} title="Item 1" />
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
