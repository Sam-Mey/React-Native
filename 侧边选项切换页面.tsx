import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [currentPage, setCurrentPage] = useState('Page1');

    const renderPage = () => {
        switch (currentPage) {
            case 'Page1':
                return <TestScreen1 />;
            case 'Page2':
                return <TestScreen2 />;
            case 'Page3':
                return <TestScreen3 />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
            </View>

            <View style={styles.content}>
                {/* 左侧菜单 */}
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => setCurrentPage('Page1')} style={currentPage === 'Page1' ? styles.selectedMenuItem : styles.menuItem}>
                        <Text style={styles.menuText}>Page 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentPage('Page2')} style={currentPage === 'Page2' ? styles.selectedMenuItem : styles.menuItem}>
                        <Text style={styles.menuText}>Page 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentPage('Page3')} style={currentPage === 'Page3' ? styles.selectedMenuItem : styles.menuItem}>
                        <Text style={styles.menuText}>Page 3</Text>
                    </TouchableOpacity>
                </View>

                {/* 右侧页面 */}
                <View style={styles.page}>
                    {renderPage()}
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#003399',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    menu: {
        backgroundColor: 'lightgray',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: 'gray',
    },
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    selectedMenuItem: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: 'gray',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    menuText: {
        fontSize: 18,
    },
    page: {
        flex: 1,
    },
});

export default App;
