import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles"

export default function ButtonCard(props: any) {
    const navigation: any = useNavigation();

    const dataProps = props.categories
    const navProps = props.nav
    const onPress= props.onPress
    const text= props.text
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(navProps, { cat: dataProps })}
                style={styles.btn}>
                <Text style={styles.btnText}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
