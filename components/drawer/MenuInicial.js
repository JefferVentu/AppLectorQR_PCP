import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa la librería de iconos

const colors = {
    background: '#00c6d1',
    button: '#043256',
    secondary: '#f9be00',
    third: '#cccccc'
};

// Lista de botones con títulos e íconos
const buttons = [
    { title: "Consulta QR", icon: "qrcode-scan" },
    { title: "Salida del almacén", icon: "exit-run" },
    { title: "Cambio de almacén", icon: "swap-horizontal" },
    { title: "Reingreso al almacén", icon: "truck-delivery" },
    { title: "Agregar Proveedor", icon: "account-plus" },
    { title: "Editar Proveedor", icon: "account-edit" },
    { title: "Historial", icon: "history" }
];

const MenuInicial = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                {buttons.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.btn}>
                        <Icon name={item.icon} size={30} color="#f9be00" />
                        <Text style={styles.btnText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default MenuInicial;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    containerButton: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
    },
    btn: {
        width: "30%",
        aspectRatio: 1,
        backgroundColor: colors.button,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        borderRadius: 10,
        padding: 10,

        // Sombra para iOS
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

        // Sombra para Android
        elevation: 10,
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5
    }
});
