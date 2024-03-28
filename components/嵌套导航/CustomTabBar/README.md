# CustomTabBar 底部导航栏

## 说明

```bash
# CustomTabBar.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomNavigationProps {
    // tabs: string[];  
    tabs: React.ReactNode[]; // 将 tabs 参数的类型定义为 React Node 数组 (传Text)
    initialTab: number;
    onTabPress?: (index: number) => void;
}


## 使用方法 1

# App.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import CustomTabBar from './CustomTabBar';

const App = () => {

  const tabs = [
    <Text key="0">&#x1F3E0;</Text>,
    <Text key="0">&#x1F3E0;</Text>,
    <Text key="0">&#x1F3E0;</Text>,
    <Text key="0">&#x1F3E0;</Text>,
    <Text key="0">&#x1F3E0;</Text>,
  ];

  return (
    <View style={styles.container}>
        <CustomTabBar
        tabs={tabs}
        initialTab={0}
        onTabPress={(index) => console.log('Tab pressed:', index)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
```

## 使用 2

```bash
# CustomTabBar.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomNavigationProps {
    tabs: string[]; // 将tabs参数标注为字符串数组类型 （传递 字符串 还可以直接传图标 🏠 ）
    // tabs: React.ReactNode[]; 
    initialTab: number;
    onTabPress?: (index: number) => void;
}


## 使用方法 2

# App.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import CustomTabBar from './CustomTabBar';

const App = () => {

  return (
    <View style={styles.container}>
      <CustomTabBar
        tabs={[
          'Home', '🏠' //直接传图标
          'Home', '🏠'
          'Home', '🏠'
          'Home', '🏠'
          'Home', '🏠'
        ]}
        initialTab={0}
        onTabPress={(index) => console.log('Tab pressed:', index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
```