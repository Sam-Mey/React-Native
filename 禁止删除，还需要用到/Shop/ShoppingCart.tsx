import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, Alert, AppState, BackHandler } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, NavigationProp, useIsFocused, CommonActions } from '@react-navigation/native';
import { RootStackParamList } from '../../../../types';
import { useNumberContext } from '../../games/Lottery/NewMacau/Contexts/NumberContext';

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

// 添加商品到购物车的函数
export const addItemToCart = (item: CartItem, cartItems: CartItem[], setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>) => {
    console.log('Adding item to cart:', item); // 打印添加的商品信息
    setCartItems([...cartItems, item]);
};

const ShoppingCart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    //============================================================
    // 离开购物车时清空购物车并卸载组件。

    //============================================================

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const storedCartItems = await AsyncStorage.getItem('cartItems');
                if (storedCartItems !== null) {
                    console.log('Successfully fetched cart items from AsyncStorage:', storedCartItems);
                    setCartItems(JSON.parse(storedCartItems));
                } else {
                    console.log('No cart items found in AsyncStorage.');
                }
            } catch (error) {
                console.error('Error fetching cart items from AsyncStorage:', error);
            }
        };
        console.log('Retrieved cart items:', cartItems); // 添加此行日志

        fetchCartItems();
    }, []);


    // 从购物车中移除商品
    const removeItemFromCart = (id: number) => {
        console.log('Removing item from cart:', id); // 打印移除的商品ID
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // 更新购物车中商品的数量
    const updateItemQuantity = (id: number, quantity: number) => {
        console.log('Updating item quantity:', id, quantity); // 打印更新的商品ID和数量
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };

    // 更新购物车中商品的价格
    const updateItemPrice = (id: number, price: number) => {
        console.log('Updating item price:', id, price); // 打印更新的商品ID和价格
        setCartItems(cartItems.map(item => item.id === id ? { ...item, price } : item));
    };

    // 计算购物车中商品的总价
    const calculateTotalPrice = (): number => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    // 渲染购物车商品项
    const renderItem = ({ item }: { item: CartItem }) => {
        console.log('Rendering item:', item); // 添加渲染日志

        return (
            <View style={styles.cartItem}>
                <Text>{item.name} - ${item.price.toFixed(2)}</Text>
                <TextInput
                    style={styles.input}
                    value={item.quantity.toString()}
                    onChangeText={text => updateItemQuantity(item.id, parseInt(text))}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={item.price.toString()}
                    onChangeText={text => updateItemPrice(item.id, parseFloat(text))}
                    keyboardType="numeric"
                />
                <Button title="Remove" onPress={() => removeItemFromCart(item.id)} />
            </View>
        );
    };

    const { setSelectedNumbers } = useNumberContext();

    console.log('Current cart items:', cartItems); // 打印当前购物车中的商品列表

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <Text style={styles.total}>Total: ${calculateTotalPrice().toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        width: 50,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginRight: 10,
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default ShoppingCart;
export type { CartItem };
