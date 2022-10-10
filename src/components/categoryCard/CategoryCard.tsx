import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles"

export default function CategoryCard(props: any) {
    const navigation: any = useNavigation();

    const name = props?.name
    const isCategory = props?.isCategory
    const handlePress = props?.handlePress

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.categoryText}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
