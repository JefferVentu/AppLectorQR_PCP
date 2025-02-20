import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import { Camera } from 'expo-camera';

const ConsultaQR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Alert.alert("Código QR Escaneado", data);
        setIsCameraActive(false); // Cierra la cámara después de escanear
    };

    if (hasPermission === null) {
        return <Text>Solicitando permiso de cámara...</Text>;
    }
    if (hasPermission === false) {
        return <Text>Acceso a la cámara denegado</Text>;
    }

    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                {!isCameraActive ? (
                    <>
                        <Text style={styles.title}>Escanea un Código QR</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setIsCameraActive(true)}>
                            <Text style={styles.buttonText}>Escanear</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <Camera
                        style={styles.camera}
                        type={Camera.Constants.Type.back}
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    >
                        <View style={styles.overlay}>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setIsCameraActive(false)}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                )}
            </View>
            
            <View style={styles.ingresoCod}>
                <Text style={styles.txtInputPCP}>O ingresa el código PCP:</Text>
                <TextInput
                    placeholder='Ingrese el código a buscar'
                    placeholderTextColor={'#8c8c8c'}
                    style={styles.inputPCP}
                />
            </View>

            
        </View>

    );
};

export default ConsultaQR;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#00c6d1',
    },
    container2:{
        alignItems: 'center',
        backgroundColor: '#00c6d1',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#043256',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    ingresoCod:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtInputPCP:{
        marginRight: 5,
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputPCP:{
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: 200,
    },
});
