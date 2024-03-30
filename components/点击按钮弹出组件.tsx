import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal } from 'react-native';

const ClickShouComponent = () => {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [modalVisible, setModalVisible] = useState(false); // 控制 Modal 的可见性
    const minSelectedCountToShow = 2; // 设置最小选中数量来显示 SubmitButton

    // 处理按钮点击事件
    const handlePress = (index: number) => {
        if (selectedItems.includes(index)) {
            // 如果已经选中，则从选中列表中移除
            setSelectedItems(selectedItems.filter(item => item !== index));
        } else {
            // 如果未选中，则添加到选中列表中
            setSelectedItems([...selectedItems, index]);
        }
    };

    // 判断是否达到显示 SubmitButton 的条件
    const shouldShowSubmitButton = selectedItems.length >= minSelectedCountToShow;

    return (
        <View style={styles.container}>
            {/* 显示多个按钮 */}
            {[...Array(7)].map((_, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)}
                    style={[
                        styles.button,
                        selectedItems.includes(index) ? styles.selectedButton : styles.unselectedButton,
                    ]}
                >
                    <Text>{`Button ${index + 1}`}</Text>
                </TouchableOpacity>
            ))}

            {/* 弹出 SubmitButton */}
            {shouldShowSubmitButton && <要弹出的组件名 />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    button: {
        width: 100,
        height: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    selectedButton: {
        backgroundColor: 'blue',
    },
    unselectedButton: {
        backgroundColor: 'gray',
    },
});

export default ClickShouComponent;
