import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

// colorfondo: #00c6d1
// colorbotones: #043256
// 2docolor: #f9be00

const Login2 = () => {

    const image = require("../assets/images/Captura de pantalla 2024-12-12 132402.png");
    const navigation = useNavigation();
    const loginUser = () => {
        navigation.navigate('HomeDrawer');
    }

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
    )
}

export default Login2

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
})