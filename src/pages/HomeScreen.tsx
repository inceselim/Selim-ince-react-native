import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles';

export default function HomeScreen() {
    const [categoryData, setcategoryData] = useState<any[]>([])
    const [productData, setProductData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const navigation: any = useNavigation();
    const [isCategory, setCategory] = useState("All")

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    //
    // Get Data with Axios
    // 
    const token: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluY2VzZWxpbTkxQGhvdG1haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2luY2VzZWxpbSIsImlhdCI6MTY1OTI3MTM3NCwiZXhwIjoxNjU5NzAzMzc0fQ.jlGfqxViwfsxb6qnOzfm1_Q5ulwa1GYjuDdvZWKQhII"

    const fetchData = () => {
        axios
            .all([
                axios
                    .get('https://upayments-studycase-api.herokuapp.com/api/categories/',
                        { headers: { "Authorization": `Bearer ${token}` } }
                    )
                    .then(function (response) {
                        setcategoryData(response.data.categories)
                    }),
                axios
                    .get('https://upayments-studycase-api.herokuapp.com/api/products/',
                        { headers: { "Authorization": `Bearer ${token}` } }
                    )
                    .then(function (response) {
                        setProductData(response.data.products)
                        console.log(response.data.products)
                    }),
            ])
            .then(
                axios.spread(function (acct, perms) {
                    setIsLoading(false)
                }),
            );
    };

    useEffect(() => {
        fetchData();
        return(
            fetchData()
        )
    }, []);


    return (
        <SafeAreaView>
            <ScrollView>
                {
                    isLoading && <ActivityIndicator />
                }

                <View style={{
                    paddingLeft: 3,
                    paddingRight: 12,
                    marginTop: 10,
                    margin: 7,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <TouchableOpacity onPress={() => setCategory("All")}>
                        <Text>All</Text></TouchableOpacity>

                    {categoryData.map(i =>
                        <TouchableOpacity onPress={() => setCategory(i.name)}>
                            <Text key={i.id}>{i.name}</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View style={{
                    flexDirection: "row",
                    flexWrap: 'wrap'
                }}>
                    {
                        isCategory == "All" ?
                            productData.map(item =>
                                <View key={item._id} style={{
                                    margin: 5,
                                    borderWidth: 2,
                                    borderColor: "#fff",
                                    borderRadius: 20,
                                    marginBottom: 15,
                                    height: windowHeight / 4,
                                    width: (windowWidth / 2) - 30,
                                }}>
                                    <TouchableOpacity onPress={
                                        () => navigation.navigate("Detail",
                                            {
                                                img: item.avatar,
                                                name: item.name,
                                                price: item.price,
                                                description: item.description
                                            })}>
                                        <Image style={{ height: (windowHeight / 4) - 80, width: (windowWidth / 2) - 50, padding: 10, marginTop: 2, alignSelf: 'center' }}
                                            source={{ uri: item.avatar }} />
                                        <Text style={{ color: "#eee", backgroundColor: "#225" }} >
                                            {item.name}
                                        </Text>
                                        <Text>
                                            {item.category}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ) : productData.map(item =>
                                
                                    isCategory==item.category? 
                                    <View style={{
                                        margin: 5,
                                        borderWidth: 2,
                                        borderColor: "#fff",
                                        borderRadius: 20,
                                        marginBottom: 15,
                                        height: windowHeight / 4,
                                        width: (windowWidth / 2) - 30,
                                    }}>
                                        <TouchableOpacity onPress={
                                            () => navigation.navigate("Detail",
                                                {
                                                    img: item.avatar,
                                                    name: item.name,
                                                    price: item.price,
                                                    description: item.description
                                                })}>
                                            <Image style={{ height: (windowHeight / 4) - 80, width: (windowWidth / 2) - 50, padding: 10, marginTop: 2, alignSelf: 'center' }}
                                                source={{ uri: item.avatar }} />
                                            <Text style={{ color: "#eee", backgroundColor: "#225" }} >
                                                {item.name}
                                            </Text>
                                            <Text>
                                                {item.category}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    :null
                                
                                )
                    }
                </View>
                {
                    //
                    //Create Product Button
                }
                <TouchableOpacity onPress={() => navigation.navigate("Create", { cat: categoryData })}
                    style={[styles.btn, { marginTop: 10, marginBottom: 10 }]}>
                    <Text style={styles.btnText}>
                        Add Product
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
