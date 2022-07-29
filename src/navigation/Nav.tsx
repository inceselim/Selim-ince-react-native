import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
//Pages
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import CreatePage from "../pages/CreatePage";

const Stack = createNativeStackNavigator();


const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={HomePage}
                    options={{ headerShown: false, title: "Home" }} />
                <Stack.Screen name="Detail" component={DetailPage}
                    options={{ headerShown: false, title: "Detail" }} />
                <Stack.Screen name="Create" component={CreatePage}
                    options={{ headerShown: false, title: "Detail" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { Nav };
