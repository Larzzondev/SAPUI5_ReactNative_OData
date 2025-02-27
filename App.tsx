import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from './app/screens/ProductListScreen';
import ProductDetailScreen from './app/screens/ProductDetailScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
