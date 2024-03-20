# React Native 通告栏

## 使用方法

```bash
# App.tsx
import React from 'react';
import BannerWithIcon from './BannerBarWithIcon';
import BannerBar from './BannerBar';

const App = () => {

  return (
    <View style={styles.container}>
        <BannerWithIcon BannerBarText="Displayed content." />
        <BannerBar />
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