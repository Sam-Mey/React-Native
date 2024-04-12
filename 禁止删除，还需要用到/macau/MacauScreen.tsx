import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNumberDataContext } from '../../../components/Contexts/NumberSelectorContex';
import SubmitButton from './Submits/SubmitButton';
import useSubmitLogic from './Submits/submitLogic';
import _screenLayout from './_screenLayout';


const MacauScreen: React.FC = () => {
    const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];
    const handleSectionPress = useCallback((section: string) => {
        console.log('Section pressed:', section);
    }, []);

    // 使用上下文钩子获取 selectedNumbers 和 setSelectedNumbers
    const { selectedNumbers, setSelectedNumbers, } = useNumberDataContext();

    // 使用 useSubmitLogic 钩子获取相关逻辑
    const {
        selectedMoney,
        handleNumberPress,
        handleMoneyChange,
        addDataToShoppingCart,
        cartItems,
        setCartItems,


        defaultAmounts,
        isEditingDefaultAmount,
        editedDefaultAmounts,
        setEditedDefaultAmounts,
        handleSaveDefaultAmounts,
        handleEditDefaultAmount,
        handleInputChangeWithCheck,

    } = useSubmitLogic();

    // 判断是否达到显示 SubmitButton 的条件
    const shouldShowSubmitButton = selectedNumbers.length >= 1; // 如果选中数字数量大于0，显示提交按钮

    console.log('selectedMoney:', selectedMoney);
    console.log('cartItems:', cartItems);
    console.log('setCartItems:', setCartItems);

    return (
        <View style={{ flex: 1 }}>
            <_screenLayout sections={sections} handleSectionPress={handleSectionPress} />
            {shouldShowSubmitButton && <SubmitButton
                selectedNumbers={selectedNumbers} // 传递 selectedNumbers 属性给 SubmitButton 组件
                selectedMoney={selectedMoney}
                handleMoneyChange={handleMoneyChange}
                handleNumberPress={handleNumberPress}
                addDataToShoppingCart={addDataToShoppingCart}
                cartItems={cartItems} // 传递 cartItems
                setCartItems={setCartItems} // 传递 setCartItems


                handleEditDefaultAmount={handleEditDefaultAmount}
                defaultAmounts={defaultAmounts}
                isEditingDefaultAmount={isEditingDefaultAmount}
                editedDefaultAmounts={editedDefaultAmounts}
                setEditedDefaultAmounts={setEditedDefaultAmounts}
                handleSaveDefaultAmounts={handleSaveDefaultAmounts}
                handleInputChangeWithCheck={handleInputChangeWithCheck}
            />}
        </View>
    );
}

export default MacauScreen;