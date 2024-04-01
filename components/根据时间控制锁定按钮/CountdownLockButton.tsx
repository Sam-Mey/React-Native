import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import moment from 'moment-timezone';

const NumberButtonsSelector = () => {
    // 数字布局
    const windowWidth = Dimensions.get('window').width;
    const itemSize = 50;
    const itemsPerRow = 6; // 每行的元素个数
    const horizontalMargin = (windowWidth - itemsPerRow * itemSize) / (itemsPerRow + 1);

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    const handleNumberSelect = (number: number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
        } else {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    const data = Array.from({ length: 49 }, (_, number) => number + 1);

    //===========================================倒计时结束锁按钮====================================================
    const [isDisabled, setIsDisabled] = useState(true);
    const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0 });

    // 自定义起始时间和结束时间
    const startTime = moment().tz('Asia/Shanghai').startOf('day').hour(18).minute(51); // 当天15:10
    const endTime = moment().tz('Asia/Shanghai').startOf('day').hour(18).minute(52); // 当天15:11

    useEffect(() => {
        const calculateRemainingTime = () => {
            const currentTime = moment().tz('Asia/Shanghai'); // 使用亚洲/上海时区

            if (currentTime.isBefore(startTime)) {
                // 如果当前时间在起始时间之前，按钮启用
                setIsDisabled(false);
                const duration = moment.duration(startTime.diff(currentTime));
                const hours = duration.hours();
                const minutes = duration.minutes();
                setRemainingTime({ hours, minutes });
            } else if (currentTime.isBetween(startTime, endTime)) {
                // 如果当前时间在起始时间和结束时间之间，按钮禁用
                setIsDisabled(true);
                const duration = moment.duration(endTime.diff(currentTime));
                const hours = duration.hours();
                const minutes = duration.minutes();
                setRemainingTime({ hours, minutes });
            } else {
                // 其他情况下，按钮启用，如果当前时间超过结束时间，设置结束时间为第二天的起始时间
                setIsDisabled(false);
                const nextStartTime = currentTime.clone().add(1, 'day').startOf('day').hour(21).minute(15);
                const duration = moment.duration(nextStartTime.diff(currentTime));
                const hours = duration.hours();
                const minutes = duration.minutes();
                setRemainingTime({ hours, minutes });
            }
        };

        calculateRemainingTime(); // Calculate initially

        const interval = setInterval(() => {
            calculateRemainingTime(); // Recalculate every minute
        }, 60000);

        return () => clearInterval(interval);
    }, []);
    //==================================================================================================
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    {data.map((_item, number) => (
                        <TouchableOpacity
                            disabled={isDisabled}
                            key={number}
                            style={[
                                styles.item,
                                isDisabled && styles.disabledButton,
                                {
                                    marginLeft: number % itemsPerRow === 0 ? horizontalMargin : 0,
                                    marginBottom: number % itemsPerRow === 0 ? horizontalMargin : 0,
                                    marginRight: horizontalMargin,
                                },
                                //  Background style after index selection （Red）
                                selectedNumbers.includes(number + 1) && (
                                    (number === 0 || number === 1 || number === 6 || number === 7 ||
                                        number === 11 || number === 12 || number === 17 || number === 18 ||
                                        number === 22 || number === 23 || number === 28 || number === 29 ||
                                        number === 33 || number === 34 || number === 39 || number === 44 ||
                                        number === 45)
                                ) && styles.selectedNumberButtonRed,

                                //  Background style after index selection （Blue）
                                selectedNumbers.includes(number + 1) &&
                                (
                                    (number === 2 || number === 3 || number === 8 || number === 9 ||
                                        number === 13 || number === 14 || number === 19 || number === 24 ||
                                        number === 25 || number === 30 || number === 35 || number === 36 ||
                                        number === 40 || number === 41 || number === 46 || number === 47)
                                ) && styles.selectedNumberButtonBlue,

                                //  Background style after index selection （Green）
                                selectedNumbers.includes(number + 1) &&
                                (
                                    (number === 4 || number === 5 || number === 10 || number === 15 ||
                                        number === 16 || number === 20 || number === 21 || number === 26 ||
                                        number === 27 || number === 31 || number === 32 || number === 37 ||
                                        number === 38 || number === 42 || number === 43 || number === 48)
                                ) && styles.selectedNumberButtonGreen,
                            ]}
                            onPress={() => handleNumberSelect(number + 1)}
                        >
                            <Text
                                style={[
                                    { fontSize: 20 },
                                    isDisabled && styles.disabledButton,
                                    (number === 0 || number === 1 || number === 6 || number === 7 ||
                                        number === 11 || number === 12 || number === 17 || number === 18 ||
                                        number === 22 || number === 23 || number === 28 || number === 29 ||
                                        number === 33 || number === 34 || number === 39 || number === 44 ||
                                        number === 45)
                                    && { color: 'red' },
                                    (number === 2 || number === 3 || number === 8 || number === 9 ||
                                        number === 13 || number === 14 || number === 19 || number === 24 ||
                                        number === 25 || number === 30 || number === 35 || number === 36 ||
                                        number === 40 || number === 41 || number === 46 || number === 47)
                                    && { color: 'blue' },
                                    (number === 4 || number === 5 || number === 10 || number === 15 ||
                                        number === 16 || number === 20 || number === 21 || number === 26 ||
                                        number === 27 || number === 31 || number === 32 || number === 37 ||
                                        number === 38 || number === 42 || number === 43 || number === 48)
                                    && { color: 'green' },
                                    selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText,
                                ]}
                            >
                                {/* Format Rules */}
                                {number < 9 ? `0${number + 1}` : number + 1}
                            </Text>

                            <Text style={[
                                { color: 'gray', fontSize: 10 },
                                selectedNumbers.includes(number + 1) &&
                                styles.selectedNumberButtonText,
                            ]}
                            >
                                {"赔48.8"}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView >
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // 左对齐
        paddingVertical: 5,
    },
    item: {
        width: 50,
        height: 50,
        backgroundColor: '#ddd',
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedNumberButtonText: {
        color: 'white', // 按钮选择后文本颜色
    },

    selectedNumberButtonRed: {
        backgroundColor: 'red',
    },

    selectedNumberButtonBlue: {
        backgroundColor: 'blue',
    },

    selectedNumberButtonGreen: {
        backgroundColor: 'green',
    },

    disabledButton: {
        backgroundColor: 'gray', //按钮锁定后的背景色
    },

});

export default NumberButtonsSelector;
