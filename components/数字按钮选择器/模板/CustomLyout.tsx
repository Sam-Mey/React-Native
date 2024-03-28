import React, { useState } from 'react';
import { Dimensions, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ElasticLayout = () => {
    const windowWidth = Dimensions.get('window').width;
    const itemSize = 60;
    const itemsPerRow = 5; // 每行的元素个数
    const horizontalMargin = (windowWidth - itemsPerRow * itemSize) / (itemsPerRow + 1);

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    const handleNumberSelect = (number: number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
        } else {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };
    // 生成一些假数据作为子元素
    const data = Array.from({ length: 49 }, (_, number) => number + 1);

    return (
        <ScrollView>
            <View style={styles.container}>
                {data.map((_item, number) => (
                    <TouchableOpacity
                        key={number}
                        style={[
                            styles.item,
                            {
                                marginLeft: number % itemsPerRow === 0 ? horizontalMargin : 0,
                                marginBottom: number % itemsPerRow === 0 ? horizontalMargin : 0,
                                marginRight: horizontalMargin,
                            }
                        ]}
                        onPress={() => handleNumberSelect(number + 1)}
                    >
                        <Text>
                            {number < 9 ? `0${number + 1}` : number + 1}
                        </Text>

                        <Text style={[
                            { color: 'gray', fontSize: 12 },
                            selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText
                        ]}
                        >
                            {"自定义布局"}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // 左对齐
        paddingVertical: 5,
    },
    item: {
        width: 60,
        height: 60,
        backgroundColor: 'blue',
    },
    selectedNumberButtonText: {
        color: 'white',
    },
});

export default ElasticLayout;