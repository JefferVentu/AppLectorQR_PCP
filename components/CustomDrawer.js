import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImage from '../assets/images/user.png'

const CustomDrawerContent = (props) => {

    const [role, setRole] = useState('');
    const [realName, setRealName] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const getUserInfo = async () => {
            const storedRole = await AsyncStorage.getItem('userRole');
            const storedRealName = await AsyncStorage.getItem('realName');
            if (storedRole) setRole(storedRole);
            if (storedRealName) setRealName(storedRealName);
        };
        getUserInfo();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userRole'); 
        await AsyncStorage.removeItem('realName'); 
        await AsyncStorage.removeItem('username'); 
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <View style={styles.userInfoSection}>
                <Image source={userImage} style={styles.profileImage} />
                <Text style={styles.userName}>{realName || 'Usuario'}</Text>
                <Text style={styles.userRole}>{role ? `Rol: ${role}` : 'Cargando...'}</Text>
            </View>

            <View style={styles.separator} />

            <DrawerItemList {...props} />

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
    userRole: {
        color: '#f9be00',
        fontSize: 14,
        marginTop: 5,
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
