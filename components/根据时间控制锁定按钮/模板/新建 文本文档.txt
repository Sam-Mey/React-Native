import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

const App = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0 });

    // 自定义起始时间和结束时间
    const startTime = moment().tz('Asia/Shanghai').startOf('day').hour(19).minute(22); // 当天15:10
    const endTime = moment().tz('Asia/Shanghai').startOf('day').hour(19).minute(23); // 当天15:11

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
                const nextStartTime = currentTime.clone().add(1, 'day').startOf('day').hour(15).minute(10);
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

    const handlePress = () => {
        console.log('Button pressed');
        // 执行按钮被按下时的操作
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handlePress}
                disabled={isDisabled}
                style={[styles.button, isDisabled && styles.disabledButton]}
            >
                <Text style={styles.buttonText}>My Button</Text>
            </TouchableOpacity>
            <Text style={styles.remainingTimeText}>
                {isDisabled ? `剩余时间直至 ${endTime.format('h:mm A')}: ${remainingTime.hours} 时 ${remainingTime.minutes} 分` : '按钮已启用'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: 'gray',
    },
    remainingTimeText: {
        marginTop: 10,
        fontSize: 16,
    },
});

export default App;
