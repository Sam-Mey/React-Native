import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShoppingCart from './ShoppingCart';


const ShopScreen = () => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>This is the shop screen</Text>
            <ShoppingCart />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ShopScreen;
