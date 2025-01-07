import React from 'react';
import { Text, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login2 from '../components/Login2';
import MenuInicial from '../components/drawer/MenuInicial';
import IngresoAlmacen from '../components/drawer/IngresoAlmacen';
import SalidaAlmacen from '../components/drawer/SalidaAlmacen';
import CambioAlmacen from '../components/drawer/CambioAlmacen';
import ReingresoAlmacen from '../components/drawer/ReingresoAlmacen';
import MasOpc from '../components/drawer/MasOpc';

// colorfondo: #00c6d1
// colorbotones: #043256
// 2docolor: #f9be00
// 3ercolor: #cccccc

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false,
        drawerActiveTintColor: '#007BFF',
        drawerInactiveTintColor: '#000',
        drawerStyle: {
          flex: 1,
          backgroundColor: '#fff',
        },
        headerStatusBarHeight: 0,
        headerStyle: {
          backgroundColor: '#007BFF',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 22,
        },
        headerTintColor: 'white',
      }}

    >
      <Drawer.Screen name="MenuInicial" component={MenuInicial} />
      <Drawer.Screen name="IngresoAlmacen" component={IngresoAlmacen} />
      <Drawer.Screen name="Salida del Almacen" component={SalidaAlmacen} />
      <Drawer.Screen name="Cambio de Almacen" component={CambioAlmacen} />
      <Drawer.Screen name="Reingreso al Almacen" component={ReingresoAlmacen} />
      <Drawer.Screen name="Más" component={MasOpc} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name='Login'
            component={Login2}
          />
          <Stack.Screen
            name='HomeDrawer'
            component={HomeDrawer}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name='Register'
            component={Register}
          />
           */}
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
