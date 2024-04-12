// screenLayout.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberSelectorA from './Selectors/NumberSelectorA';
import SideListBar from './SideBar/SideList';
import ZodiacOptions from '../../../components/Timer/ZodiacOptions';

interface screenLayoutProps {
    sections: string[];
    handleSectionPress: (section: string) => void;
}

const options = [
    '鼠',
    '牛',
    '虎',
    '兔',
    '龙',
    '蛇',
    '马',
    '羊',
    '猴',
    '鸡',
    '狗',
    '猪',
    '小',
    '大',
    '奇',
    '偶',
    '全',
    '清',
];

const screenLayout: React.FC<screenLayoutProps> = ({ sections, handleSectionPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.sideBar}>
                    <SideListBar sections={sections} onSectionPress={handleSectionPress} />
                </View>
                <View style={styles.mainContent}>
                    <ZodiacOptions options={options} />
                    <NumberSelectorA itemSize={60} itemsPerRow={4} />
                </View>
            </View>
        </View>
    );
}

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
        color: '#FFFFFF',
        fontSize: 20,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    sideBar: {
        width: 100,
        backgroundColor: '#F0F0F0',
    },
    mainContent: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default screenLayout;
