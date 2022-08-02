import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

export default function CreateScreen(props: any) {
    const navigation: any = useNavigation();

    //Categories Data
    const cat: any[] = props.route.params.cat
    const [categoryData, setcategoryData] = useState<any[]>(cat)
    // Selected Category Data
    const [isCategory, setCategory] = useState()

    //
    //Form data
    const [title, onChangeTitle] = useState<string>("");
    const [price, onChangePrice] = useState<number | any>(0);
    const [description, onChangeDescription] = useState<string>("");
    const [imgLink, onChangeImgLink] = useState<string>("");

    //
    //Api Token
    const token: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluY2VzZWxpbTkxQGhvdG1haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2luY2VzZWxpbSIsImlhdCI6MTY1OTI3MTM3NCwiZXhwIjoxNjU5NzAzMzc0fQ.jlGfqxViwfsxb6qnOzfm1_Q5ulwa1GYjuDdvZWKQhII"

    //
    //Post config
    //
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

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
        axios.post('https://upayments-studycase-api.herokuapp.com/api/products/',
            postData,
            config
        )
            .then(function (response) {
                console.log(response.status)
                console.log(response.config)
                console.log(response.headers)
                console.log(response.data.data);
                console.log(response.data.headers['Content-Type']);
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
            <Text style={{ paddingLeft: 10, }}>Select Category: {isCategory}</Text>
            <View style={{
                paddingLeft: 3,
                paddingRight: 12,
                marginTop: 10,
                margin: 7,
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                {categoryData.map(i =>
                    <TouchableOpacity onPress={() => setCategory(i.name)}>
                        <Text style={isCategory == i.name ? { backgroundColor: "#224", color: "#fff" } : null}>{i.name}</Text>
                    </TouchableOpacity>
                )}
            </View>
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
