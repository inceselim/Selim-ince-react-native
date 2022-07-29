import React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native';

export default function DetailPage(props: any) {
    const img = props.route.params.img
    const description = props.route.params.description
    const name = props.route.params.name
    const price = props.route.params.price

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView>
            <ScrollView>
                <Image style={{
                    height: (windowHeight / 2),
                    width: (windowWidth) - 10, padding: 10, marginTop: 2,
                }}
                    source={{ uri: img }} />
                <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text style={{ fontSize: 26, fontWeight: "bold" }} >{name}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }} >${price}</Text>
                </View>
                <Text style={{ fontSize: 17, margin: 3, padding: 10 }} >{description}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
