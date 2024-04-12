// layoutStyles.tsx

import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const itemSize = 60;
const itemsPerRow = 4;
const left = 100;
const right = 0;
const horizontalMargin = (windowWidth - left - right - itemsPerRow * itemSize) / (itemsPerRow + 1);

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingVertical: 5,
    },
    item: {
        width: itemSize,
        height: itemSize,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },

    horizontalMargin: {
        marginLeft: horizontalMargin,
        marginRight: horizontalMargin,
        marginBottom: horizontalMargin,
    },

    selectedNumberButtonText: {
        color: 'white', // 按钮选择后文本颜色
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

    disabledButton: {
        backgroundColor: 'gray', //按钮锁定后的背景色
    },
});

