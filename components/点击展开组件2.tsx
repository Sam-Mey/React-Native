import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
    options: string[];
}

const FixedOptionsComponent: React.FC<Props> = ({ options }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    // 从 options 中截取前 18 个选项，确保总共只有 18 个选项
    const displayedOptions = options.slice(0, 18);

    // 将 18 个选项分成三行，每行 6 个选项
    const rows = [];
    for (let i = 0; i < 3; i++) {
        const rowOptions = displayedOptions.slice(i * 6, (i + 1) * 6);
        rows.push(
            <View key={i} style={styles.row}>
                {rowOptions.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.option}>
                        <Text>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} style={styles.header}>
                <Text style={styles.headerText}>{expanded ? 'Hide Options' : 'Show Options'}</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.optionsContainer}>
                    {rows}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // paddingTop: 20, // 顶部填充，以容纳头部按钮
    },
    header: {
        position: 'absolute', // 固定位置
        top: 0, // 顶部
        // width: '100%', // 宽度铺满
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        zIndex: 1, // 确保头部在选项之上
    },
    headerText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    optionsContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 40, // 空出固定头部的空间
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
});

export default FixedOptionsComponent;
