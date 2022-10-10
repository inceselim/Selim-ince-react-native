import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles';
import ButtonCard from '../components/buttonCard/ButtonCard';

//
//import Redux
import { fetchCategoriesData } from '../redux/features/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProductsData } from '../redux/features/productSlice';
import ProductCard from '../components/productCard.tsx/ProductCard';
import CategoryCard from '../components/categoryCard/CategoryCard';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [isCategory, setCategory] = useState("All")

    //
    // Redux
    const dispatch = useAppDispatch();
    const category: any = useAppSelector(state => state.categoriesData)
    const product: any = useAppSelector(state => state.productsData)

    useEffect(() => {
        dispatch(fetchProductsData())
        dispatch(fetchCategoriesData())
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={product?.data} numColumns={2}
                ListHeaderComponent={
                    <View style={styles.containerCategory} >
                        <TouchableOpacity onPress={() => setCategory("All")}>
                            <Text style={isCategory == "All" ? styles.buttonActive : styles.buttonDeactive}>All</Text>
                        </TouchableOpacity>
                        <FlatList data={category?.data} horizontal
                            renderItem={({ item,index }) => {
                                return (
                                    <CategoryCard key={index+item._id} name={item.name} isCategory={isCategory} handlePress={() => setCategory(item.name)} />
                                )
                            }} />
                    </View>
                }
                ListFooterComponent={<ButtonCard categories={category.data} nav={"Create"} text={"Add Product"} />}
                renderItem={({ item, index }) => (
                    isCategory !== "All" ?
                        isCategory == item.category ?
                            <ProductCard key={index+item._id} img={item.avatar}
                                name={item.name} price={item.price} description={item.description}
                            />
                            : null
                        : <ProductCard key={index+item._id} img={item.avatar}
                            name={item.name} price={item.price} description={item.description}
                        />

                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView >
    );
}