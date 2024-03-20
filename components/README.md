# React Native 无缝轮播组件

## 用法

```bash
# App.tsx
import React from 'react';
import Carousel from './Carousel';

const App = () => {

  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // 更多图片链接...
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Carousel images={images} />
      </SafeAreaView>
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