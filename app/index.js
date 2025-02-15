import React from 'react';
import { Text, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login2 from '../components/Login2';
import MenuInicial from '../components/drawer/MenuInicial';
import ConsultaQR from '../components/drawer/ConsultaQR';
import SalidaAlmacen from '../components/drawer/Almacen/SalidaAlmacen';
import CambioAlmacen from '../components/drawer/Almacen/CambioAlmacen';
import ReingresoAlmacen from '../components/drawer/Almacen/ReingresoAlmacen';
import AgregarProveedor from '../components/drawer/Proveedor/AgregarProveedor';
import EditarProveedor from '../components/drawer/Proveedor/EditarProveedor';
import Historial from '../components/drawer/Historial';
import CustomDrawerContent from '../components/CustomDrawer';

// colorfondo: #00c6d1
// colorbotones: #043256
// 2docolor: #f9be00
// 3ercolor: #cccccc
// #007BFF

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent{...props}/>}
      screenOptions={{
        // headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#043256',
        drawerInactiveTintColor: '#000',
        drawerStyle: {
          flex: 1,
          backgroundColor: '#cccccc',
        },
        headerStatusBarHeight: 0,
        headerStyle: {
          backgroundColor: '#043256',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 22,
        },
        headerTintColor: 'white',
      }}

    >
      <Drawer.Screen name="Inicio" component={MenuInicial} />
      <Drawer.Screen name="Consulta QR" component={ConsultaQR} />
      <Drawer.Screen name="Salida del Almacen" component={SalidaAlmacen} />
      <Drawer.Screen name="Cambio de Almacen" component={CambioAlmacen} />
      <Drawer.Screen name="Reingreso al Almacen" component={ReingresoAlmacen} />
      <Drawer.Screen name='Agregar Proveedor' component={AgregarProveedor} />
      <Drawer.Screen name='Editar Proveedor' component={EditarProveedor}/>
      <Drawer.Screen name='Historial' component={Historial}/>
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
