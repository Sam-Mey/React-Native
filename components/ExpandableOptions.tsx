import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ExpandableOptionsProps {
    options: string[];
}

const ExpandableOptions: React.FC<ExpandableOptionsProps> = ({ options }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} style={styles.header}>
                <Text style={styles.headerText}>{expanded ? '收起' : '展开'}</Text>
            </TouchableOpacity>

            {expanded && (
                <View style={styles.optionsContainer}>
                    {[...Array(Math.ceil(options.length / 6))].map((_, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {options.slice(rowIndex * 6, rowIndex * 6 + 6).map((option, index) => (
                                <TouchableOpacity key={index} style={styles.option}>
                                    <Text style={styles.optionText}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: '100%',
        // margin: 10,
        // padding: 10,
        backgroundColor: '#ccc',
        // backgroundColor: '#000',
    },
    header: {
        width: 40,
        padding: 10,
        backgroundColor: '#ccc',
        alignItems: 'center',
        borderRadius: 5,
    },
    headerText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    optionsContainer: {
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    option: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
    optionText: {
        fontSize: 14,
    },
});

export default ExpandableOptions;
