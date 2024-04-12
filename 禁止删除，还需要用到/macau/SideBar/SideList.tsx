// SideListBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SideListBarProps {
    sections: string[];
    onSectionPress: (section: string) => void;
}

const SideListBar: React.FC<SideListBarProps> = ({ sections, onSectionPress }) => {
    return (
        <View style={styles.container}>
            {sections.map((section, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.section}
                    onPress={() => onSectionPress(section)}
                >
                    <Text style={styles.sectionText}>{section}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0', // 添加背景色
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        width: '100%',
        alignItems: 'center',
    },
    sectionText: {
        fontSize: 16,
    },
});

export default SideListBar;


// // SideListBar.tsx
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// interface SideListBarProps {
//     sections: string[];
//     onSectionPress: (section: string) => void;
// }

// const SideListBar: React.FC<SideListBarProps> = ({ sections, onSectionPress }) => {
//     return (
//         <View style={styles.container}>
//             {sections.map((section, index) => (
//                 <TouchableOpacity
//                     key={index}
//                     style={styles.section}
//                     onPress={() => onSectionPress(section)}
//                 >
//                     <Text style={styles.sectionText}>{section}</Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#F0F0F0',
//         position: 'absolute', // 使用绝对定位
//         left: 0, // 固定在屏幕左侧
//         top: 0, // 与屏幕顶部对齐
//         bottom: 0, // 与屏幕底部对齐
//         width: 100, // 固定宽度
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     section: {
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E0E0E0',
//         width: '100%',
//         alignItems: 'center',
//     },
//     sectionText: {
//         fontSize: 16,
//     },
// });

// export default SideListBar;
