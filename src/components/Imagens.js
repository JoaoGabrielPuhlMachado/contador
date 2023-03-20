import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function Imagens() {
    const imagens = [
        {caminho : 'https://preview.redd.it/dvr6gpwr26g91.jpg?width=960&crop=smart&auto=webp&v=enabled&s=e97a95eb86d324694e6271c2ba9d1054855fc0f3', nome:'capivara1'},
        {caminho : 'https://img.ifunny.co/images/1388a672146de0b868da49ded6419b5991ef21897499ee156497071dee1f5012_1.jpg', nome:'capivara2'},
        {caminho : 'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/01/05/capivaras-20400556.jpg', nome: 'capivara3'},
    ]
    return (
        <View style={styles.container}>
            <Text>Imagens</Text>
            <FlatList data={imagens} renderItem={({item}) => (<View><Text style={styles.texto}>{item.nome}</Text><Image style={styles.imagem} source={{uri: item.caminho}} /></View>)}  /> 
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