// ManagerContext.tsx

import React, { createContext, useContext, useState } from 'react';
import { CartItem } from '../Shop/ShoppingCart';

interface NumberDataContextType {
    selectedNumbers: number[];
    setSelectedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
    addDataToShoppingCart: (selectedNumbers: number[]) => void;
    handleNumberPress: (number: number) => void;

    // 购物车相关上下文
    cartItems: CartItem[];
    addItemToCart: (item: CartItem) => void;
    removeItemFromCart: (id: number) => void;
    updateItemQuantity: (id: number, quantity: number) => void;
    updateItemPrice: (id: number, price: number) => void;
    calculateTotalPrice: () => number;
}

const NumberDataContext = createContext<NumberDataContextType | undefined>(undefined);

export const NumberDataProvider: React.FC<any> = ({ children }) => {

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    const handleNumberPress = (number: number) => {
        console.log('User selected number:', number); // 添加此行日志
        setSelectedNumbers(prevSelectedNumbers => [...prevSelectedNumbers, number]);
    };

    const addDataToShoppingCart = (selectedNumbers: number[]) => {
        console.log('Submitting selected numbers:', selectedNumbers);
        // Your submit logic here
    };

    //=================== 购物车相关上下文============================
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    console.log('NumberDataProvider is called with selectedNumbers:', selectedNumbers, 'and cartItems:', cartItems);
    console.log('Using NumberDataContext with selectedNumbers:', selectedNumbers, 'and cartItems:', cartItems);

    const addItemToCart = (item: CartItem) => {
        console.log('Adding item to cart:', item);
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateItemQuantity = (id: number, quantity: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const updateItemPrice = (id: number, price: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, price } : item));
    };

    const calculateTotalPrice = (): number => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };
    //=================== 购物车相关上下文============================
    const contextValue: NumberDataContextType = {
        selectedNumbers,
        setSelectedNumbers,
        addDataToShoppingCart,
        handleNumberPress,

        // 购物车相关上下文
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        updateItemPrice,
        calculateTotalPrice,
    };

    return (
        <NumberDataContext.Provider value={contextValue}>
            {children}
        </NumberDataContext.Provider>
    );
};

export const useNumberDataContext = () => {
    const context = useContext(NumberDataContext);
    if (!context) {
        throw new Error('useNumberDataContext must be used within a NumberDataProvider');
    }
    return context;
};