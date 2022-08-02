//
//Navigation
//
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
//Pages
import HomeScreen from "../pages/HomeScreen";
import DetailScreen from "../pages/DetailScreen";
import CreateScreen from "../pages/CreateScreen";

const Stack = createNativeStackNavigator();


const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{ headerShown: false, title: "Home" }} />
                <Stack.Screen name="Detail" component={DetailScreen}
                    options={{ headerShown: false, title: "Detail" }} />
                <Stack.Screen name="Create" component={CreateScreen}
                    options={{ headerShown: false, title: "Detail" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { Nav };
