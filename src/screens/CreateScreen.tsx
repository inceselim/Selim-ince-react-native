import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../redux/store';

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
        category: isCategory,
        developerEmail: "inceselim91@gmail.com"
    })

    //
    //Api Token
    const token: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluY2VzZWxpbTkxQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9pbmNlc2VsaW0iLCJpYXQiOjE2NjUzMzMwMzIsImV4cCI6MTY2NTc2NTAzMn0.1bMrRfs2CKsYdneY41HChRbBuSryXfgCpLoQ16cr8Lc"

    //
    //Post config
    //
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': "application/json"
        }
    };
    //
    //Post Request
    //
    const handleClick = () => {
        console.log("COMPLETED")
        axios.post('https://upayments-studycase-api.herokuapp.com/api/products',
            postData,
            config
        )
            .then(function (response) {
                console.log(response.status)
                console.log(response.config)
                console.log(response.headers)
                console.log(response.data.data);
                console.log(response.data);
            })
            .then(navigation.navigate("Home"))
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
            <ScrollView horizontal style={styles.containerCategory}>
                {cat.map(i =>
                    <TouchableOpacity key={i._id} onPress={() => setCategory(i.name)}>
                        <Text style={isCategory == i.name ? styles.buttonActive : styles.buttonDeactive}>
                            {i.name}
                        </Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <TouchableOpacity onPress={handleClick} style={styles.btn}>
                <Text style={styles.btnText}>Add Product</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
