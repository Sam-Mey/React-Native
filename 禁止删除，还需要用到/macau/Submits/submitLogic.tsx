// submitLogic.tsx

import { NavigationProp, useNavigation } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { RootStackParamList } from '../../../../../../types';
import { Alert } from 'react-native';
import ShoppingCart, { addItemToCart } from "../../../../components/Shop/ShoppingCart";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const useSubmitLogic = () => {
    //=============================索引开始==============================  
    const [defaultAmounts, setDefaultAmounts] = useState<number[]>([5, 10, 20, 50, 100]);
    const [isEditingDefaultAmount, setIsEditingDefaultAmount] = useState(false);
    // const [editedDefaultAmounts, setEditedDefaultAmounts] = useState<string[]>(defaultAmounts.map(String));
    const [editedDefaultAmounts, setEditedDefaultAmounts] = useState(defaultAmounts.map(String));

    const handleSaveDefaultAmounts = () => {
        // 检查用户输入是否有效
        const parsedAmounts = editedDefaultAmounts.map(parseFloat);
        if (parsedAmounts.some(isNaN)) {
            Alert.alert('错误', '请输入有效的金额');
            return;
        }

        setDefaultAmounts(parsedAmounts);
        setIsEditingDefaultAmount(false);
    };
    const handleEditDefaultAmount = () => {
        setIsEditingDefaultAmount(true);
    };

    const handleInputChangeWithCheck = (index: number, newValue: string) => {
        // 检查输入的值是否为整数
        const intValue = parseInt(newValue);
        if (isNaN(intValue) || intValue === 0) {
            // 如果输入的值不是有效的非零整数，显示错误消息并清空输入值
            Alert.alert('警告', '请输入有效的非零整数');
            // 清空输入值
            const newEditedAmounts = [...editedDefaultAmounts];
            newEditedAmounts[index] = "";
            setEditedDefaultAmounts(newEditedAmounts);
            return;
        }

        // 检查编辑后的默认值数组中是否存在重复值
        const isDuplicate: boolean = editedDefaultAmounts.some((value, i) => i !== index && parseInt(value) === intValue);

        if (isDuplicate) {
            // 如果存在重复值，显示错误消息并清空输入值
            Alert.alert('警告', '输入的值重复，请重新输入');
            // 清空输入值
            const newEditedAmounts = [...editedDefaultAmounts];
            newEditedAmounts[index] = "";
            setEditedDefaultAmounts(newEditedAmounts);
        } else {
            // 如果没有重复值，更新编辑后的默认值数组
            const newEditedAmounts = [...editedDefaultAmounts];
            newEditedAmounts[index] = intValue.toString(); // 将整数值转换为字符串
            setEditedDefaultAmounts(newEditedAmounts);
        }
    };

    //=============================索引结束==============================

    //=============================添加到购物车==============================
    // 添加到购物车
    const [selectedMoney, setSelectedMoney] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleMoneyChange = (text: string) => {
        // 如果输入框的值为空或者删除所有数字后为空，则将输入框的值设置为空字符串
        if (text === '' || (text === '0' && selectedMoney === '0')) {
            setSelectedMoney('');
        } else {
            // 否则，将输入框的值设置为输入值的整数部分
            setSelectedMoney(Math.floor(Number(text)).toString());
        }
    };

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const addDataToShoppingCart = (selectedNumbers: number[], cartItems: CartItem[], setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>) => {
        // 检查金额是否为0
        if (selectedMoney === '0') {
            // 清空输入值
            setSelectedMoney('');
            Alert.alert('警告', '金额不能为0，请重新输入');
            return;
        }

        // 将所选项目添加到购物车中
        const newCartItems: CartItem[] = [];
        selectedNumbers.forEach(number => {
            newCartItems.push({
                id: number,
                name: `Number ${number}`, // 根据你的逻辑来设置商品名称
                quantity: 1, // 默认数量为1
                price: parseFloat(selectedMoney), // 商品价格为输入的金额
            });
        });

        // 合并新项目和当前项目，并设置新的购物车项目
        const updatedCartItems = [...cartItems, ...newCartItems];
        setCartItems(updatedCartItems);

        // 将购物车项目存储到 AsyncStorage
        AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
            .then(() => console.log('Cart items successfully stored in AsyncStorage'))
            .catch(error => console.error('Error storing cart items in AsyncStorage:', error));

        setSelectedMoney('');
        navigation.navigate('Shop', { tabBarVisible: true });
        console.log('Data to be added to cart:', cartItems); // 添加此行日志
    };

    // console.log('添加到购物车的数据:', addItemToCart);
    // const addDataToShoppingCart = (selectedNumbers: number[]) => {
    //     // 检查金额是否为0
    //     if (selectedMoney === '0') {
    //         // 清空输入值
    //         setSelectedMoney('');
    //         Alert.alert('警告', '金额不能为0，请重新输入');
    //         return;
    //     }

    //     let data = selectedNumbers.map(number => [selectedMoney, number]);
    //     if (selectedNumbers.length > 0 && selectedMoney === '') {
    //         console.log('请先选择一个数字并输入金额');
    //         return;
    //     }
    //     console.log('提交的数据:', data);
    //     setSelectedMoney('');
    //     navigation.navigate('Shop', { tabBarVisible: true });
    // };

    const handleNumberPress = (number: number) => {
        setSelectedMoney(Math.floor(number).toString());
    };

    //=============================添加到购物车==============================

    return {
        selectedMoney,
        handleMoneyChange,
        handleNumberPress,
        addDataToShoppingCart,
        cartItems: cartItems, // 返回购物车状态，这里提供了初始值
        setCartItems: setCartItems, // 返回更新购物车状态的函数，这里提供了初始值

        handleEditDefaultAmount,
        handleSaveDefaultAmounts,
        setEditedDefaultAmounts,
        isEditingDefaultAmount,
        editedDefaultAmounts,
        defaultAmounts,
        handleInputChangeWithCheck,
    };
};



export { ShoppingCart };
export type { CartItem };
export default useSubmitLogic;
