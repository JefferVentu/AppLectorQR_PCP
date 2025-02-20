import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { Picker } from '@react-native-picker/picker';

const SalidaAlmacen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [selectedPlanta, setSelectedPlanta] = useState("planta1");
    const [selectedUbicacion, setSelectedUbicacion] = useState(null);

    const getUbicaciones = () => {
        return selectedPlanta === "planta1"
            ? [
                { label: "URDIDORA 1 (VERDE)", value: "urdidora1" },
                { label: "URDIDORA 2 (AZUL)", value: "urdidora2" },
                { label: "TRAMA", value: "trama" },
                { label: "VENTA", value: "venta" },
            ]
            : [
                { label: "URDIDORA 3 (PEÑON)", value: "urdidora3" },
                { label: "TRAMA", value: "trama" },
                { label: "VENTA", value: "venta" },
            ];
    };

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
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                {!isCameraActive ? (
                    <TouchableOpacity style={styles.button} onPress={() => setIsCameraActive(true)}>
                        <Text style={styles.buttonText}>Escanear</Text>
                    </TouchableOpacity>
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
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Código Kardex: </Text>
                <Text style={styles.infoText}>Código PCP: </Text>
                <Text style={styles.infoText}>Material: </Text>
                <Text style={styles.infoText}>Título: </Text>
                <Text style={styles.infoText}>Color: </Text>
                <Text style={styles.infoText}>Lote: </Text>
                <Text style={styles.infoText}>Num Caja: </Text>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Planta:</Text>
                    <Picker
                        selectedValue={selectedPlanta}
                        onValueChange={(itemValue) => setSelectedPlanta(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="PLANTA 1" value="planta1" />
                        <Picker.Item label="PLANTA 2" value="planta2" />
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Ubicación:</Text>
                    <Picker
                        selectedValue={selectedUbicacion}
                        onValueChange={(itemValue) => setSelectedUbicacion(itemValue)}
                        style={styles.picker}
                    >
                        {getUbicaciones().map((ubicacion) => (
                            <Picker.Item key={ubicacion.value} label={ubicacion.label} value={ubicacion.value} />
                        ))}
                    </Picker>
                </View>
                <Text style={styles.infoText}>Fecha de salida: </Text>
                <Text style={styles.infoText}>Hora de salida: </Text>
                <Text style={styles.infoText}>Servicio: </Text>
                <Text style={styles.infoText}>Nombre: </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => null}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default SalidaAlmacen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00c6d1',
        padding: 20,
    },
    cameraContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#043256',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    },
    picker: {
        height: 50,
        color: 'black',
        flex: 1,
        fontSize: 14,
        backgroundColor: '#cccccc',
    },
    infoContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#f9be00',
    },
    infoText: {
        marginVertical: 10,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    }
});
