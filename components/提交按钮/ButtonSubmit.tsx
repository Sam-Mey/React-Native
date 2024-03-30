
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const SubmitButton = () => {

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
    const [selectedMoney, setSelectedMoney] = useState<string>(''); // 将类型从 number 更改为 string

    // ====================定义父组件中的逻辑=====================
    // const handleNumberSelect = (number: number) => {
    //     if (selectedNumbers.includes(number)) {
    //         // 如果数字已经选中，则取消选择
    //         setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    //     } else {
    //         // 否则将数字添加到选中列表中
    //         setSelectedNumbers([...selectedNumbers, number]);
    //     }
    // };
    // ====================定义父组件中的逻辑=====================

    const handleMoneyChange = (text: string) => {
        setSelectedMoney(text); // 直接设置为用户输入的字符串
    };

    // map 方法 {提交逻辑判断}
    const handleSubmit = () => {
        let data = selectedNumbers.map(number => [selectedMoney, number]); // 将 selectedMoney 与每个 selectedNumber 组合成新的数据
        if (selectedNumbers.length > 0 && selectedMoney !== '') { // 检查金额不为 null
            console.log('提交的数据:', data);
            // 清空输入框
            setSelectedNumbers([]);
            setSelectedMoney(''); // 将金额设置为 null
        } else {
            console.log('请先选择一个数字并输入金额');
        }
    };

    // 快速输入数字
    const handleNumberPress = (number: number) => {
        setSelectedMoney(number.toString());
    };

    return (
        <View style={styles.container}>
            <View style={styles.bottomButtonContainer}>
                <Text style={{ color: '#ddd' }}>快捷：</Text>
                {[10, 20, 50, 100, 200].map((number) => (
                    <TouchableOpacity
                        key={number}
                        style={[
                            styles.numberButtonKey,
                            selectedMoney === number.toString() && styles.selectedButton // 添加选中样式
                        ]}
                        onPress={() => handleNumberPress(number)}
                    >
                        {/* <Image
                            source={require('../../../../assets/chips/image.png')} // 替换成你的图片路径
                            style={styles.image}
                            resizeMode="contain" // 使图片适应容器
                        /> */}
                        <Text style={styles.numberButtonText}>{number}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <TextInput
                        style={styles.input}
                        placeholder="输入数字"
                        placeholderTextColor="gray"
                        keyboardType="numeric"
                        onChangeText={handleMoneyChange}
                        value={selectedMoney} // 直接将数字设置为状态中的值
                    />
                    <Text style={styles.submitButtonText}>提交</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
    },

    submitButtonText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    },

    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
        height: 40,
        width: 80,
        fontSize: 14,
        color: '#fff',
        left: -10,
    },

    bottomButtonContainer: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 5,
    },

    selectedButton: { // 选中时的颜色
        backgroundColor: 'blue',
    },

    numberButtonKey: {
        flexDirection: 'row',
        alignItems: 'center', // 水平居中
        justifyContent: 'center', // 垂直居中
        backgroundColor: 'green',
        padding: 10,
        marginHorizontal: 3,
        borderRadius: 360,
        width: 40,
        height: 40,
    },

    numberButtonText: {
        color: 'white',
        fontSize: 12,
        position: 'absolute', // 文本绝对定位于按钮上
        zIndex: 1,
    },

    image: {
        width: 50, // 将图片宽度设置为自适应
        height: 50,
        zIndex: 0, // 确保图片在文字之下
        borderRadius: 360,
        left: 2,
    },
});

export default SubmitButton;