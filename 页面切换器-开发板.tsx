import React, { useState, ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PageSwitchProps {
    pages: {
        key: string;
        component: ReactNode;
        title: string;
    }[];
}

const PageSwitch: React.FC<PageSwitchProps> = ({ pages }) => {
    const [currentPage, setCurrentPage] = useState<string>(pages[0].key);

    const renderPage = () => {
        const page = pages.find(p => p.key === currentPage);
        return page ? page.component : null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                {pages.map(page => (
                    <TouchableOpacity
                        key={page.key}
                        onPress={() => setCurrentPage(page.key)}
                        style={styles.button}>
                        <Text style={styles.menuText}>{page.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.page}>
                {renderPage()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    menu: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    button: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        borderRadius: 5,
    },
    menuText: {
        fontSize: 16,
    },
    page: {
        flex: 1,
    },
});

export default PageSwitch;
