
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BottomNavigationProps {
    // tabs: string[]; // 将tabs参数标注为字符串数组类型
    tabs: React.ReactNode[]; // 将 tabs 参数的类型定义为 React Node 数组
    initialTab: number;
    onTabPress?: (index: number) => void;
}

const BottomTabBar: React.FC<BottomNavigationProps> = ({ tabs, initialTab, onTabPress }) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const handleTabPress = (tabIndex: number) => {
        setActiveTab(tabIndex);
        if (onTabPress) {
            onTabPress(tabIndex);
        }
    };

    return (

        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.tab, activeTab === index && styles.activeTab]}
                    onPress={() => handleTabPress(index)}
                >
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',// 背景色
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        height: 50,
        // position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeTab: {
        backgroundColor: '#ccc',
        borderRadius: 10,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BottomTabBar;
