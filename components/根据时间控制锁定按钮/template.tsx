import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

const App = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0 });

    // 自定义起始时间和结束时间
    const startTime = moment().tz('Asia/Shanghai').startOf('day').hour(15).minute(10); // 当天15:10
    const endTime = moment().tz('Asia/Shanghai').startOf('day').hour(15).minute(11); // 当天15:11

    useEffect(() => {
        const calculateRemainingTime = () => {
            const currentTime = moment().tz('Asia/Shanghai'); // 使用亚洲/上海时区

            if (currentTime.isBetween(startTime, endTime)) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
            }

            const duration = moment.duration(endTime.diff(currentTime));
            const hours = duration.hours();
            const minutes = duration.minutes();

            setRemainingTime({ hours, minutes });
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
                {`剩余时间直至 ${endTime.format('h:mm A')}: ${remainingTime.hours} 时 ${remainingTime.minutes} 分`}
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
