import React, { useState } from 'react';
import { 
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, 
    KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Alert 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { users } from '../data/users';  

const Login2 = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();
    const image = require("../assets/images/icon.png");

    const loginUser = async () => {
        if (!username.trim()) {
            Alert.alert('Error', 'Ingrese un usuario');
            return;
        }

        const user = users.find(u => u.username.toLowerCase() === username.trim().toLowerCase());

        if (user) {
            try {
                await AsyncStorage.clear(); // 📌 Limpia cualquier sesión anterior

                await AsyncStorage.setItem('userRole', user.role);
                await AsyncStorage.setItem('username', user.username);
                await AsyncStorage.setItem('realName', user.name);

                Alert.alert('Bienvenido', `${user.name}`);

                // 📌 Redirige al Drawer correcto según el rol
                navigation.reset({
                    index: 0,
                    routes: [{ name: user.role === 'admin' ? 'AdminDrawer' : 'OperarioDrawer' }],
                });
            } catch (error) {
                Alert.alert('Error', 'Ocurrió un problema al guardar los datos');
                await AsyncStorage.clear(); // 📌 Limpia en caso de error
            }
        } else {
            Alert.alert('Error', 'Usuario no registrado');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.innerContainer}>
                        <Image source={image} style={styles.imagen} resizeMode='contain' />
                        <Text style={styles.title}>INGRESE SU USUARIO</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Usuario:</Text>
                            <TextInput
                                placeholder='Ingrese su usuario'
                                placeholderTextColor={'#8c8c8c'}
                                style={styles.input}
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize="none"
                            />
                        </View>
                        <TouchableOpacity style={styles.ingresoBtn} onPress={loginUser}>
                            <Text style={styles.txtButton}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default Login2;

// 📌 **Estilos optimizados**
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00c6d1',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'white',
    },
    inputContainer: {
        width: '90%',
        flexDirection: 'row'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
        marginTop: 6,
        marginRight: 10,
    },
    input: {
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: 200,
    },
    ingresoBtn: {
        backgroundColor: '#043256',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    txtButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
