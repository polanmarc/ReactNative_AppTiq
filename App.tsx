import * as React from 'react-native';
import { LoginScreen } from "./src/presentation/screens/LoginScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TiqsScreen } from './src/presentation/screens/TiqsScreen';
import { TiqScreen } from './src/presentation/screens/TiqScreen';
import { ThemeContextProvider } from './src/presentation/context/ThemeContext';
import { Header } from './src/presentation/components/Header';
import { HomeScreen } from './src/presentation/screens/HomeScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ThemeContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Prueba"
            component={HomeScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Tiqs"
            component={TiqsScreen}
            options={{ headerTitle: () => <Header /> }} />
          <Stack.Screen
            name="Tiq"
            component={TiqScreen}
            options={{ headerTitle: () => <Header /> }} />
        </Stack.Navigator>
      </ThemeContextProvider>
    </View>
  )
}