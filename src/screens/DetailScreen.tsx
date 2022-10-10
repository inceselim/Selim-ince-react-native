import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { styles } from '../styles/styles';

export default function DetailScreen(props: any) {
    const img = props.route.params.img
    const description = props.route.params.description
    const name = props.route.params.name
    const price = props.route.params.price
    return (
        <SafeAreaView>
            <ScrollView>
                <Image style={styles.imageDetail} source={{ uri: img }} />
                <View style={styles.detailContent}>
                    <Text style={styles.headerText} >{name}</Text>
                    <Text style={styles.priceText} >${price}</Text>
                </View>
                <Text style={styles.detailText} >{description}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
