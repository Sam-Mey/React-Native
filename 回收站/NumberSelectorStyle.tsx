import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CustomNumberSelectorProps {
    index: number;
    number: number;
    selectedNumbers: number[];
}

const CustomNumberSelector: React.FC<CustomNumberSelectorProps> = ({ index, number, selectedNumbers }) => {
    return (
        <View>
            <Text style={getNumberSelectorStyle(index, number, selectedNumbers)}>
                {number}
            </Text>
        </View>
    );
};

const getNumberSelectorStyle = (index: number, number: number, selectedNumbers: number[]) => {
    if (selectedNumbers.includes(number)) {
        if (
            [0, 1, 6, 7, 11, 12, 17, 18, 22, 23, 28, 29, 33, 34, 39, 44, 45].includes(index)
        ) {
            return [styles.selectedNumberButtonRed, styles.selectedNumberButtonText];
        } else if (
            [2, 3, 8, 9, 13, 14, 19, 24, 25, 30, 35, 36, 40, 41, 46, 47].includes(index)
        ) {
            return [styles.selectedNumberButtonBlue, styles.selectedNumberButtonText];
        } else if (
            [4, 5, 10, 15, 16, 20, 21, 26, 27, 31, 32, 37, 38, 42, 43, 48].includes(index)
        ) {
            return [styles.selectedNumberButtonGreen, styles.selectedNumberButtonText];
        }
    }
    return null;
};

const styles = StyleSheet.create({
    selectedNumberButtonRed: {
        backgroundColor: 'red',
        color: 'white',
    },
    selectedNumberButtonBlue: {
        backgroundColor: 'blue',
        color: 'white',
    },
    selectedNumberButtonGreen: {
        backgroundColor: 'green',
        color: 'white',
    },
    selectedNumberButtonText: {
        color: 'white',
    },
});

export default CustomNumberSelector;
