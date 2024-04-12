// SideListLogic.tsx
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import SideListBar from './SideList';

interface SideListLogicProps {
    onSectionPress: (section: string) => void;
}

const SideListLogic: React.FC<SideListLogicProps> = ({ onSectionPress }) => {
    // 假设这是你的部分列表数据
    const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

    // 定义一个处理部分点击的回调函数
    const handleSectionPress = useCallback((section: string) => {
        console.log('Section pressed:', section);
        // 在这里处理部分点击的逻辑
        onSectionPress(section);
    }, [onSectionPress]);

    return (
        <View style={styles.container}>
            <SideListBar
                sections={sections}
                onSectionPress={handleSectionPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100, // 侧边栏的固定宽度
        backgroundColor: '#FFFFFF', // 侧边栏的背景颜色
    },
});

export default SideListLogic;
