import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
    options: string[];
}

const FixedOptionsComponent: React.FC<Props> = ({ options }) => {
    const [expanded, setExpanded] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const toggleOption = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    console.log('Expanded:', expanded); // 添加调试语句
    console.log('Selected Options:', selectedOptions); // 添加调试语句

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} style={styles.header}>
                <Text style={styles.headerText}>{expanded ? 'Hide Options' : 'Show Options'}</Text>
            </TouchableOpacity>
            {options ? ( // 添加条件检查
                expanded ? (
                    <View style={styles.optionsContainer}>
                        {options.slice(0, 18).reduce((acc: React.ReactNode[][], option, index) => {
                            const groupIndex = Math.floor(index / 6);
                            if (!acc[groupIndex]) {
                                acc[groupIndex] = [];
                            }
                            acc[groupIndex].push(
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.optionButton,
                                        selectedOptions.includes(option) && styles.selectedOptionButton,
                                    ]}
                                    onPress={() => toggleOption(option)}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            selectedOptions.includes(option) && styles.selectedOptionText,
                                        ]}
                                    >
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            );
                            return acc;
                        }, []).map((row, index) => (
                            <View key={index} style={styles.row}>
                                {row}
                            </View>
                        ))}
                    </View>
                ) : null
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // paddingTop: 20,
    },
    header: {
        width: '100%',
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        zIndex: 1,
    },
    headerText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    optionsContainer: {
        width: '100%',
        paddingTop: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    optionButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    optionText: {
        textAlign: 'center',
    },
    selectedOptionButton: {
        backgroundColor: 'lightgreen',
    },
    selectedOptionText: {
        fontWeight: 'bold',
    },
});

export default FixedOptionsComponent;
