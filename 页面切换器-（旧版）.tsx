import React, { useState, ReactNode, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNumberContext } from '../Contexts/NumberContext';

interface PagesSwitchProps {
    pages: {
        key: string;
        component: ReactNode;
        title: string;
    }[];
}

const PagesSwitch: React.FC<PagesSwitchProps> = ({ pages }) => {
    const [currentPage, setCurrentPage] = useState<string>(pages[0].key);
    const { setTitle } = useNumberContext(); // 获取setTitle方法

    const renderPage = () => {
        const page = pages.find(p => p.key === currentPage);
        return page ? page.component : null;
    };

    // 设置标题到上下文
    useEffect(() => {
        const currentPageData = pages.find(page => page.key === currentPage);
        if (currentPageData) {
            console.log('setTitle:', currentPageData.title); // 打印日志
            setTitle(currentPageData.title);
        }
    }, [currentPage, pages, setTitle]);

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
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
    },
    menuText: {
        fontSize: 16,
    },
    page: {
        flex: 1,
    },
});

export default PagesSwitch;
