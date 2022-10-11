import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function ProductCard(props: any) {
    const navigation: any = useNavigation();

    const id = props?.id
    const img = props?.img
    const name = props?.name
    const price = props?.price
    const description = props?.description

    return (
        <View style={styles.container} key={id}>
            <TouchableOpacity onPress={
                () => navigation.navigate("Detail",
                    {
                        img: img,
                        name: name,
                        price: price,
                        description: description
                    })}>
                <Image style={styles.image} source={{ uri: img }} />
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}
