import * as React from 'react-native';
import { LoginScreen } from "./src/presentation/screens/LoginScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TiqsScreen } from './src/presentation/screens/TiqsScreen';
import { TiqScreen } from './src/presentation/screens/TiqScreen';
import { ThemeContextProvider } from './src/presentation/context/ThemeContext';
import { Header } from './src/presentation/components/Header';
import { HomeScreen } from './src/presentation/screens/HomeScreen';
import { View } from 'react-native';

/**
 * Stack Navigator para la navegación en la aplicación.
 * @constant
 */
const Stack = createNativeStackNavigator();


/**
 * Componente principal de la aplicación.
 * @function App
 * @returns {JSX.Element} Elemento JSX que representa la aplicación.
 */
export const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ThemeContextProvider>
        <Stack.Navigator>
          {/* Pantalla de inicio */}
          <Stack.Screen
            name="Prueba"
            component={HomeScreen}
            options={{ headerShown: false }} />

          {/* Pantalla de inicio de sesión */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} />

          {/* Pantalla de visualización de tiquets */}
          <Stack.Screen
            name="Tiqs"
            component={TiqsScreen}
            options={{ header: () => <Header title={"Tiqs"} /> }} />

          {/* Pantalla de visualización de un tiquet específico */}
          <Stack.Screen
            name="Tiq"
            component={TiqScreen}
            options={{ header: () => <Header title={"Tiq"} /> }} />
        </Stack.Navigator>
      </ThemeContextProvider>
    </View>
  )
}
