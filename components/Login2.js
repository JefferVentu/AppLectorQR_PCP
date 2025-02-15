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
                await AsyncStorage.setItem('userRole', user.role);
                await AsyncStorage.setItem('username', user.username);
                await AsyncStorage.setItem('realName', user.name);

                Alert.alert('Bienvenido', `${user.name}`);

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeDrawer' }], 
                });
            } catch (error) {
                Alert.alert('Error', 'Ocurrió un problema al guardar los datos');
            }
        } else {
            Alert.alert('Error', 'Usuario no registrado');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: '#00c6d1' }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.container2}>
                    <View>
                        <View style={styles.container}>
                            <Image source={image} style={styles.imagen} resizeMode='contain' />
                            <Text style={styles.title}>INGRESE SU USUARIO</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.infoPass}>Usuario: </Text>
                                <TextInput
                                    placeholder='Ingrese su usuario'
                                    placeholderTextColor={'#8c8c8c'}
                                    style={styles.input}
                                    value={username}
                                    onChangeText={setUsername}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.ingresoBtn} onPress={loginUser}>
                                <Text style={styles.txtButton}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default Login2;

// 📌 **Estilos**
const styles = StyleSheet.create({
    container2:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 350,
        height: 400,
        margin: 0,
    },
    title: {
        marginTop: -30,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    infoPass: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
        textAlign: 'center',
    },
    containerButton:{
        alignItems: 'center',
        margin: 30,
    },
    ingresoBtn:{
        backgroundColor: '#043256',
        padding: 15,
        borderColor: '#043256',
        borderRadius: 10,
    },
    txtButton:{
        color: 'white',
        fontSize: 15,
    }
});
