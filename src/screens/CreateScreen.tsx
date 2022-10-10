import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import ButtonCard from '../components/buttonCard/ButtonCard';
import { useAppDispatch } from '../redux/store';
import { fetchProductsData,postProductsData } from '../redux/features/productSlice';

export default function CreateScreen(props: any) {
    const navigation: any = useNavigation();

    //Categories Data
    const cat: any[] = props.route.params.cat
    const [categoryData, setcategoryData] = useState<any[]>(cat)
    // Selected Category Data
    const [isCategory, setCategory] = useState()

    const dispatch = useAppDispatch();
    //
    //Form data
    const [title, onChangeTitle] = useState<string>("");
    const [price, onChangePrice] = useState<number | any>(0);
    const [description, onChangeDescription] = useState<string>("");
    const [imgLink, onChangeImgLink] = useState<string>("");

    //
    //Post data template
    //
    const postData = JSON.stringify({
        name: title,
        price: price,
        description: description,
        avatar: "https://images.unsplash.com/photo-1577344224573-f9280c105a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        category: "Hobby",
        developerEmail: "inceselim91@hotmail.com"
    })

    //
    //Post Request
    //
    const handleClick = () => {
        dispatch(postProductsData(postData))
        navigation.navigate("Home")
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder="Product title"
                keyboardType='default'
                onChangeText={onChangeTitle}
                value={title}
            />
            <TextInput
                style={styles.input}
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
                style={styles.input}
                placeholder="Image link"
                keyboardType='default'
                onChangeText={onChangeImgLink}
                value={imgLink}
            />
            <View style={styles.containerCategory}>
                {categoryData.map(i =>
                    <TouchableOpacity key={i._id} onPress={() => setCategory(i.name)}>
                        <Text style={isCategory == i.name ? { backgroundColor: "#224", color: "#fff" } : null}>{i.name}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <TouchableOpacity onPress={handleClick}>
                <Text>
                "Add Product"
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
