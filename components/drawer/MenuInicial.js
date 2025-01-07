import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// colorfondo: #00c6d1
// colorbotones: #043256
// 2docolor: #f9be00
// 3ercolor: #cccccc

const MenuInicial = () => {
    return (
        <View style={styles.container}>
            <Text>menuInicial</Text>
        </View>
    )
}

export default MenuInicial

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#00c6d1',
        flex: 1,
    }
})