import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuInicial from '../drawer/MenuInicialOperario';
import ConsultaQR from '../drawer/ConsultaQR';
import SalidaAlmacen from '../drawer/Almacen/SalidaAlmacen';
import ReingresoAlmacen from '../drawer/Almacen/ReingresoAlmacen';
import Historial from '../drawer/Historial';
import CustomDrawerContent from '../CustomDrawer';

const Drawer = createDrawerNavigator();

const OperarioDrawer = () => {
    return (
        <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#043256',
                drawerInactiveTintColor: '#000',
                drawerStyle: { backgroundColor: '#cccccc' },
                headerStyle: { backgroundColor: '#043256' },
                headerTintColor: 'white',
            }}
        >
            <Drawer.Screen name="Menu Inicial" component={MenuInicial} />
            <Drawer.Screen name="Consulta QR" component={ConsultaQR} />
            <Drawer.Screen name="Salida del Almacén" component={SalidaAlmacen} />
            <Drawer.Screen name="Reingreso al Almacén" component={ReingresoAlmacen} />
            <Drawer.Screen name="Historial" component={Historial} />
        </Drawer.Navigator>
    );
};

export default OperarioDrawer;
