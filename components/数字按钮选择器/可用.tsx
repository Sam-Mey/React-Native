import React, { useState } from 'react';
import { Dimensions, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ElasticLayout = () => {
    const windowWidth = Dimensions.get('window').width;
    const itemSize = 60;
    const itemsPerRow = 4; // 每行的元素个数
    const horizontalMargin = (windowWidth - itemsPerRow * itemSize) / (itemsPerRow + 1);

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    const handleNumberSelect = (number: number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
        } else {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    const data = Array.from({ length: 49 }, (_, number) => number + 1);

    return (
        <View>
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
                                },
                                //  Background style after index selection （Red）
                                selectedNumbers.includes(number + 1) && (
                                    (number === 0 || number === 1 || number === 6 || number === 7 ||
                                        number === 11 || number === 12 || number === 17 || number === 18 ||
                                        number === 22 || number === 23 || number === 28 || number === 29 ||
                                        number === 33 || number === 34 || number === 39 || number === 44 ||
                                        number === 45)
                                ) && styles.selectedNumberButtonRed,
                                //  Background style after index selection （Blue）
                                selectedNumbers.includes(number + 1) &&
                                (
                                    (number === 2 || number === 3 || number === 8 || number === 9 ||
                                        number === 13 || number === 14 || number === 19 || number === 24 ||
                                        number === 25 || number === 30 || number === 35 || number === 36 ||
                                        number === 40 || number === 41 || number === 46 || number === 47)
                                ) && styles.selectedNumberButtonBlue,
                                //  Background style after index selection （Green）
                                selectedNumbers.includes(number + 1) &&
                                (
                                    (number === 4 || number === 5 || number === 10 || number === 15 ||
                                        number === 16 || number === 20 || number === 21 || number === 26 ||
                                        number === 27 || number === 31 || number === 32 || number === 37 ||
                                        number === 38 || number === 42 || number === 43 || number === 48)
                                ) && styles.selectedNumberButtonGreen,
                            ]}
                            onPress={() => handleNumberSelect(number + 1)}
                        >
                            <Text
                                style={[
                                    { fontSize: 20 },
                                    (number === 0 || number === 1 || number === 6 || number === 7 ||
                                        number === 11 || number === 12 || number === 17 || number === 18 ||
                                        number === 22 || number === 23 || number === 28 || number === 29 ||
                                        number === 33 || number === 34 || number === 39 || number === 44 ||
                                        number === 45)
                                    && { color: 'red' },
                                    (number === 2 || number === 3 || number === 8 || number === 9 ||
                                        number === 13 || number === 14 || number === 19 || number === 24 ||
                                        number === 25 || number === 30 || number === 35 || number === 36 ||
                                        number === 40 || number === 41 || number === 46 || number === 47)
                                    && { color: 'blue' },
                                    (number === 4 || number === 5 || number === 10 || number === 15 ||
                                        number === 16 || number === 20 || number === 21 || number === 26 ||
                                        number === 27 || number === 31 || number === 32 || number === 37 ||
                                        number === 38 || number === 42 || number === 43 || number === 48)
                                    && { color: 'green' },

                                    selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText,
                                ]}
                            >
                                {/* Format Rules */}
                                {number < 9 ? `0${number + 1}` : number + 1}
                            </Text>

                            <Text style={[
                                { color: 'gray', fontSize: 12 },
                                selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText
                            ]}
                            >
                                {"赔率48.8"}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView >
        </View>
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
        backgroundColor: '#ddd',
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedNumberButtonText: {
        color: 'white',
    },

    selectedNumberButtonRed: {
        backgroundColor: 'red',
    },

    selectedNumberButtonBlue: {
        backgroundColor: 'blue',
    },

    selectedNumberButtonGreen: {
        backgroundColor: 'green',
    },
});

export default ElasticLayout;
