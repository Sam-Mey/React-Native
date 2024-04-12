// NumberSelectorA.tsx

import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './_selectorLayout/_layoutStyles';
import { calculateHorizontalMargin } from './_selectorLayout/_layoutUtils';
import { useNumberDataContext } from '../../../../components/Contexts/NumberSelectorContex';
import moment from 'moment-timezone';


interface NumberSelectorAProps {
    itemSize: number;
    itemsPerRow: number;
}

const NumberSelectorA: React.FC<NumberSelectorAProps> = ({ itemSize, itemsPerRow }) => {
    const horizontalMargin = calculateHorizontalMargin(itemsPerRow, itemSize);
    const { selectedNumbers, setSelectedNumbers } = useNumberDataContext();
    //===============================弹出提交===============================
    // 添加状态变量来追踪选中数字的数量
    const [selectedCount, setSelectedCount] = useState(1);

    // 当选中的数字列表变化时更新选中数字的数量
    useEffect(() => {
        setSelectedCount(selectedNumbers.length);
    }, [selectedNumbers]);
    //===============================弹出提交===============================

    //===============================选择逻辑===============================
    const handleNumberSelect = (number: number) => {
        if (selectedNumbers.includes(number)) {
            // 如果数字已经选中，则取消选择
            setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
        } else {
            // 否则将数字添加到选中列表中
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };
    //===============================选择逻辑===============================

    //===========================================倒计时结束锁按钮====================================================
    const [isDisabled, setIsDisabled] = useState(true);
    const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0 });

    // 自定义起始时间和结束时间
    const startTime = moment().tz('Asia/Shanghai').startOf('day').hour(21).minute(15); // 当天15:10
    const endTime = moment().tz('Asia/Shanghai').startOf('day').hour(21).minute(33); // 当天15:11

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
    //===========================================倒计时结束锁按钮====================================================

    return (
        <View style={{ flex: 1, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#ddd' }}>A区</Text>
            <ScrollView>
                <View style={styles.container}>
                    {Array.from({ length: 49 }, (_, number) => number + 1).map((_, number) => (
                        <TouchableOpacity
                            key={number}
                            disabled={isDisabled} // 开启锁定按钮功能
                            style={[
                                styles.item,
                                [isDisabled && styles.disabledButton], // 锁定后的按钮样式
                                {
                                    marginLeft: number % itemsPerRow === 0 ? horizontalMargin : 0,
                                    marginBottom: horizontalMargin,
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
                            {/* Text style before index selection  */}
                            <Text
                                style={[
                                    { fontSize: 16 },
                                    [isDisabled && styles.disabledButton],
                                    (number === 0 || number === 1 || number === 6 || number === 7 ||
                                        number === 11 || number === 12 || number === 17 || number === 18 ||
                                        number === 22 || number === 23 || number === 28 || number === 29 ||
                                        number === 33 || number === 34 || number === 39 || number === 44 ||
                                        number === 45)
                                    &&// { color: 'red' },
                                    { color: isDisabled ? 'gray' : 'red' },

                                    (number === 2 || number === 3 || number === 8 || number === 9 ||
                                        number === 13 || number === 14 || number === 19 || number === 24 ||
                                        number === 25 || number === 30 || number === 35 || number === 36 ||
                                        number === 40 || number === 41 || number === 46 || number === 47)
                                    && // { color: 'blue' },
                                    { color: isDisabled ? 'gray' : 'blue' },

                                    (number === 4 || number === 5 || number === 10 || number === 15 ||
                                        number === 16 || number === 20 || number === 21 || number === 26 ||
                                        number === 27 || number === 31 || number === 32 || number === 37 ||
                                        number === 38 || number === 42 || number === 43 || number === 48)
                                    &&// { color: 'green' },
                                    { color: isDisabled ? 'gray' : 'green' },

                                    selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText,
                                ]}
                            >
                                {/* Format Rules */}
                                {number < 9 ? `0${number + 1}` : number + 1}
                            </Text>

                            <Text style={[
                                { color: 'gray', fontSize: 12 },
                                selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText
                            ]}
                            >
                                {"Text"}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default NumberSelectorA;
