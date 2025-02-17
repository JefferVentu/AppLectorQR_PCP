import React, { useEffect, useState } from 'react';
import { Text, View, StatusBar, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login2 from '../components/Login2';
import AdminDrawer from '../components/rolesDrawer/AdminDrawer';
import OperarioDrawer from '../components/rolesDrawer/OperarioDrawer';


// colorfondo: #00c6d1
// colorbotones: #043256
// 2docolor: #f9be00
// 3ercolor: #cccccc
// #007BFF

const Stack = createNativeStackNavigator();

export default function App() {

  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const storedRole = await AsyncStorage.getItem('userRole');
        setUserRole(storedRole);
      } catch (error) {
        console.error('Error al obtener el rol:', error);
      } finally {
        setLoading(false);
      }
    };
    checkUserRole();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#043256" />
      </View>
    );
  }

  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name="Login"
            component={Login2}
          />
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name="AdminDrawer"
            component={AdminDrawer}
          />
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name="OperarioDrawer"
            component={OperarioDrawer}
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
