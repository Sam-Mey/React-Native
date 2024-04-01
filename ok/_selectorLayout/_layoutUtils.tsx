// layoutUtils.ts

import { Dimensions } from 'react-native';

export const calculateHorizontalMargin = (itemsPerRow: number, itemSize: number): number => {
    const windowWidth = Dimensions.get('window').width;
    return (windowWidth - 100 - itemsPerRow * itemSize) / (itemsPerRow + 1);
};
