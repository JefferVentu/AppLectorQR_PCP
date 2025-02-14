import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImage from '../assets/images/user.png'

const CustomDrawerContent = (props) => {

    const navigation = useNavigation();

    const handleLogout = () => {
        alert('Sesión cerrada correctamente.');
        navigation.replace('Login');
    }

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            {/* 📌 Sección superior: Imagen y nombre de usuario */}
            <View style={styles.userInfoSection}>
                <Image 
                    source={userImage} // Reemplázalo con la imagen real del usuario
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>Usuario Ejemplo</Text>
            </View>

            <View style={styles.separator} />

            {/* 📌 Opciones del Drawer */}
            <DrawerItemList {...props} />

            {/* 📌 Sección inferior con el botón de Cerrar Sesión */}
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;

// 📌 **Estilos**
const styles = StyleSheet.create({
    userInfoSection: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#043256',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    userName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
    },
    logoutButton: {
        backgroundColor: '#D32F2F',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
