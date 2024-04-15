import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TestScreen1 from './Lottery/NewMacau/screens/TestScreen1';
import TestScreen2 from './Lottery/NewMacau/screens/TestScreen2';

const App = () => {
    const [currentPage, setCurrentPage] = useState('Page1');

    const renderPage = () => {
        switch (currentPage) {
            case 'Page1':
                return <TestScreen1 />;
            case 'Page2':
                return <TestScreen2 />;
            case 'Page3':
                return <Page3 />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* 左侧菜单 */}
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => setCurrentPage('Page1')}>
                    <Text style={styles.menuText}>Page 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => setCurrentPage('Page2')}>
                    <Text style={styles.menuText}>Page 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => setCurrentPage('Page3')}>
                    <Text style={styles.menuText}>Page 3</Text>
                </TouchableOpacity>
            </View>

            {/* 右侧页面 */}
            <View style={styles.page}>
                {renderPage()}
            </View>
        </View>
    );
};

const Page1 = () => {
    return (
        <View style={styles.pageContent}>

            <Text>Page 1</Text>
        </View>
    );
};

const Page2 = () => {
    return (
        <View style={styles.pageContent}>
            <Text>Page 2</Text>
        </View>
    );
};

const Page3 = () => {
    return (
        <View style={styles.pageContent}>
            <Text>Page 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
    },
    menu: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    menuItem: {
        marginBottom: 10,
    },
    menuText: {
        fontSize: 18,
    },
    page: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
