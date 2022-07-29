import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import CategoryCard from '../components/categoryCard/CategoryCard';
import axios from 'axios';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import DetailPage from './DetailPage';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles';


export default function HomePage() {
    const navigation: any = useNavigation();

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [productData, setProductData] = useState<any[]>([])
    const [productData1, setProductData1] = useState<any[]>([])

    const [categoryData, setcategoryData] = useState<any[]>([])
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(4);

    const handleSingleIndexSelect = (index: any) => {
        // For single Tab Selection SegmentedControlTab
        setSelectedIndex(index);
        setIsEnabled(previousState => !previousState);
    };

    const tabValues = categoryData.map(i => i.name)
    tabValues.push("All")

    //
    // Get Data with Axios
    // 
    const getData = async () => {
        axios
            .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
            .then(user => {
                setcategoryData(user.data)
            })
        axios
            .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
            .then(product => {
                setProductData(product.data)
            })
    }
    getData()

    console.log(productData)
    return (
        <SafeAreaView style={{ flex: 1 }} >

            <View>
                <FlatList
                    ListHeaderComponent={
                        <SegmentedControlTab
                            values={tabValues}
                            selectedIndex={selectedIndex}
                            onTabPress={handleSingleIndexSelect}
                        />
                    }
                    ListFooterComponent={
                        <TouchableOpacity onPress={() => navigation.navigate("Create",{cat:categoryData})}
                            style={styles.btn}>
                            <Text style={styles.btnText}>
                                Add Product
                            </Text>
                        </TouchableOpacity>
                    }
                    data={productData} numColumns={2}
                    renderItem={(item: any) => (
                        <View style={{ margin: 10, borderWidth: 2, borderColor: "#fff", borderRadius: 20, marginBottom: 5, height: windowHeight / 4, width: (windowWidth / 2) - 30 }}>
                            <TouchableOpacity onPress={
                                () => navigation.navigate("Detail",
                                    {
                                        img: item.item.avatar,
                                        name: item.item.name,
                                        price: item.item.price,
                                        description: item.item.description
                                    })}>
                                <Image style={{ height: (windowHeight / 4) - 80, width: (windowWidth / 2) - 50, padding: 10, marginTop: 2, alignSelf: 'center' }}
                                    source={{ uri: item.item.avatar }} />
                                <Text style={{ color: "#eee", backgroundColor: "#225" }} >
                                    {item.item.name}
                                </Text>
                                <Text>
                                    {item.item.category}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )} />
            </View>
        </SafeAreaView>
    );
}
