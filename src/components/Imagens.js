import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function Imagens() {
    return (
        <View style={styles.container}>
            <Text>Imagens</Text>
            <View><Text style={styles.texto}>Capivara Tangerina</Text><Image style={styles.imagem} source={require('../imagens/capivara1.jpeg')} /></View>
            <View><Text style={styles.texto}>Capivara Feliz</Text><Image style={styles.imagem} source={require('../imagens/capivara2.jpg')} /></View>
            <View><Text style={styles.texto}>Capivara Pull Up</Text><Image style={styles.imagem} source={require('../imagens/capivara3.jpeg')} /></View>
            <View><FlatList data={} renderItem={({})} => <Text>{}</Text>  /></View>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: 200,
        height: 150,
    },
    texto: {
        marginTop: 30,
    }
})