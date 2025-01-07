import React from 'react';
import { Text, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login2 from '../components/Login2';
import MenuInicial from '../components/drawer/MenuInicial';
import IngresoAlmacen from '../components/drawer/IngresoAlmacen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MenuInicial" component={MenuInicial} />
      <Drawer.Screen name="IngresoAlmacen" component={IngresoAlmacen} />
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
