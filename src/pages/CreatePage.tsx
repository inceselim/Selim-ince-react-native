import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

export default function CreatePage(props: any) {
    const navigation: any = useNavigation();
    
    const cat: any[] = props.route.params.cat
    const tabValues = cat.map(i => i.name)
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(4);

    const handleSingleIndexSelect = (index: any) => {
        // For single Tab Selection SegmentedControlTab
        setSelectedIndex(index);
        setIsEnabled(previousState => !previousState);
    };


    const [title, onChangeTitle] = useState("");
    const [price, onChangePrice] = useState("");
    const [description, onChangeDescription] = useState("");
    const [imgLink, onChangeImgLink] = useState("");

    const handleClick = async () => {
        axios.post('https://api.mywebtuts.com/api/users', {
            title: title,
            price: price,
            description: description,
            avatar: imgLink,
            developeremail: "inceselim91@gmail.com"
        })
            .then(navigation.navigate("Home"));
    };

    return (
        <SafeAreaView>
            <TextInput
                style={stylesInput.input}
                placeholder="Product title"
                keyboardType='default'
                onChangeText={onChangeTitle}
                value={title}
            />
            <TextInput
                style={stylesInput.input}
                keyboardType="numeric"
                placeholder="Price"
                onChangeText={onChangePrice}
                value={price}
            />
            <TextInput
                style={{ padding: 10, borderRadius: 10, borderWidth: 1, margin: 10, }}
                placeholder="Description"
                multiline
                numberOfLines={4}
                keyboardType='default'
                maxLength={500}
                onChangeText={onChangeDescription}
                value={description}
            />
            <TextInput
                style={stylesInput.input}
                placeholder="Image link"
                keyboardType='default'
                onChangeText={onChangeImgLink}
                value={imgLink}
            />
            <Text style={{ paddingLeft: 10, }}>Select Category:</Text>
            <SegmentedControlTab
                values={tabValues}
                selectedIndex={selectedIndex}
                onTabPress={handleSingleIndexSelect}
            />
            <TouchableOpacity onPress={handleClick} style={styles.btn}>
                <Text style={styles.btnText}>Add Product</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const stylesInput = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
});

function Any() {
    throw new Error('Function not implemented.');
}
