//  SubmitButton;

import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { submitButtonStyles } from './SubmitButtonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from './submitLogic';


interface SubmitButtonProps {
    selectedNumbers: number[];
    selectedMoney: string;
    handleNumberPress: (number: number) => void;
    handleMoneyChange: (text: string) => void;
    addDataToShoppingCart: (selectedNumbers: number[], cartItems: CartItem[], setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>) => void;
    cartItems: CartItem[]; // 声明 cartItems
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>; // 声明 setCartItems


    handleEditDefaultAmount: () => void;
    defaultAmounts: number[];
    isEditingDefaultAmount: boolean; // 是否正在编辑默认金额的状态
    editedDefaultAmounts: string[]; // 编辑后的默认金额数组
    setEditedDefaultAmounts: (amounts: string[]) => void;
    handleSaveDefaultAmounts: () => void; // 将函数名改为 handleSaveDefaultAmounts
    handleInputChangeWithCheck: (index: number, newValue: string) => void; // 修改此处的参数类型
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    selectedNumbers,
    selectedMoney,
    handleMoneyChange,
    addDataToShoppingCart,
    handleNumberPress,

    setEditedDefaultAmounts,
    handleEditDefaultAmount,
    handleSaveDefaultAmounts,
    isEditingDefaultAmount,
    defaultAmounts,
    editedDefaultAmounts,
    handleInputChangeWithCheck,
    cartItems,
    setCartItems,
}) => {
    console.log("defaultAmounts:", defaultAmounts);
    console.log('handleInputChange:', handleInputChangeWithCheck);
    return (
        <View style={submitButtonStyles.container}>
            <View style={submitButtonStyles.bottomButtonContainer}>
                {/* 快捷金额按钮 */}
                <TouchableOpacity onPress={handleEditDefaultAmount} style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faEdit} size={20} color={'gray'} />
                    <Text style={{ fontSize: 10, color: 'white' }}>快捷</Text>
                </TouchableOpacity>
                {defaultAmounts.map((number) => (
                    <TouchableOpacity
                        key={number}
                        style={[
                            submitButtonStyles.numberButtonKey,
                            selectedMoney === number.toString() && submitButtonStyles.selectedButton
                        ]}
                        onPress={() => handleNumberPress(number)}
                    >
                        <Text style={submitButtonStyles.numberButtonText}>{number}</Text>
                    </TouchableOpacity>
                ))}
                {/* 模态框修改快捷金额 */}
                <Modal visible={isEditingDefaultAmount} animationType="slide" transparent={true}>
                    <View style={submitButtonStyles.modalContainer}>
                        <View style={submitButtonStyles.modalContent}>
                            {defaultAmounts.map((amount, index) => (
                                <View key={amount.toString()}>
                                    <TextInput
                                        value={editedDefaultAmounts[index]}
                                        onChangeText={text => {
                                            const newEditedAmounts = [...editedDefaultAmounts];
                                            newEditedAmounts[index] = text;
                                            setEditedDefaultAmounts(newEditedAmounts);
                                            handleInputChangeWithCheck(index, text);
                                        }}
                                        keyboardType="numeric"
                                        style={submitButtonStyles.modalInput}
                                        clearTextOnFocus={true}
                                        onFocus={() => {
                                            // 当用户点击输入框时，清空默认值
                                            if (parseInt(editedDefaultAmounts[index]) === defaultAmounts[index]) {
                                                const newEditedAmounts = [...editedDefaultAmounts];
                                                newEditedAmounts[index] = "";
                                                setEditedDefaultAmounts(newEditedAmounts);
                                            }
                                        }}
                                        onBlur={() => {
                                            // 如果输入为空，则恢复默认值
                                            if (editedDefaultAmounts[index] === "") {
                                                const newEditedAmounts = [...editedDefaultAmounts];
                                                newEditedAmounts[index] = defaultAmounts[index].toString();
                                                setEditedDefaultAmounts(newEditedAmounts);
                                            }
                                        }}
                                    />
                                </View>
                            ))}
                            <TouchableOpacity onPress={handleSaveDefaultAmounts} style={submitButtonStyles.saveButton}>
                                <Text style={submitButtonStyles.saveButtonText}>保存</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* 添加到购物车 */}
                <TouchableOpacity style={submitButtonStyles.submitButton} onPress={() => addDataToShoppingCart(selectedNumbers, cartItems, setCartItems)}>

                    <TextInput
                        style={submitButtonStyles.input}
                        placeholder="输入金额"
                        placeholderTextColor="gray"
                        keyboardType="numeric"
                        onChangeText={handleMoneyChange}
                        value={selectedMoney}
                    />
                    <Text style={submitButtonStyles.submitButtonText}>添加</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SubmitButton;