import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Login2 = () => {

    const image = require("../assets/images/Captura de pantalla 2024-12-12 132402.png");
    
    return (
        <View>
            <View style={styles.container}>
                <Image source={image} style={styles.imagen} resizeMode = 'contain'/>
                <Text style={styles.title}>INGRESE SU USUARIO</Text>
                <Text style={styles.infoPass}>Usuario: </Text>
            </View>
        </View>
    )
}

export default Login2

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen:{
        width: 350,
        height: 400,
        margin: 0,
    },
    title:{
        marginTop: -30,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    infoPass:{
        fontSize: 20,
        fontWeight: 'bold',
    },
})