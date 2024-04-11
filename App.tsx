import * as React from 'react';
import { LoginScreen } from "./src/presentation/screens/LoginScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TiqsScreen } from './src/presentation/screens/TiqsScreen';
import { TiqScreen } from './src/presentation/screens/TiqScreen';
import { ThemeContextProvider } from './src/presentation/context/ThemeContext';
import { PaperProvider } from 'react-native-paper';
import { Header } from './src/presentation/components/Header';
import { Prueba } from './src/presentation/screens/Prueba';
import WelcomeScreen from './src/presentation/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <PaperProvider>
      <ThemeContextProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="Prueba" 
            component={Prueba} 
            options={{ headerShown: false }}/>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}/>
          <Stack.Screen 
            name="Tiqs" 
            component={TiqsScreen} 
            options={{ headerTitle: () => <Header /> }}/>
          <Stack.Screen 
            name="Tiq" 
            component={TiqScreen} 
            options={{ headerTitle: () => <Header /> }}/>
        </Stack.Navigator>
      </ThemeContextProvider>
    </PaperProvider>
  )
}
