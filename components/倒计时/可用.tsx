import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'; // 导入时钟图标

const CountdownTimer: React.FC = () => {
    const [remainingTime, setRemainingTime] = useState<number>(0);
    const [sleepReminder, setSleepReminder] = useState<string>('');

    useEffect(() => {
        const calculateRemainingTime = () => {
            const now = moment().tz('Asia/Shanghai');
            const targetTime = moment().tz('Asia/Shanghai').set({ hour: 21, minute: 20, second: 0 });

            if (now.isAfter(targetTime)) {
                // If it's already past 21:20, calculate remaining time till next day 21:20
                targetTime.add(1, 'day');
            }

            // Check if current time is within sleep time range
            const sleepStartMinute = 21 * 60 + 15; // 睡眠开始时间（分钟）[21*60+15] 表示晚上21：15 开始
            const sleepEndMinute = 21 * 60 + 33; // 睡眠结束时间（分钟）[21*60+33] 表示晚上21：33 结束
            const currentMinute = now.hour() * 60 + now.minute();
            if (currentMinute >= sleepStartMinute && currentMinute < sleepEndMinute) {
                // If current time is within sleep time range, show sleep reminder
                setSleepReminder('即将开始，请等待...');
                setRemainingTime(targetTime.diff(now));
            } else {
                // If current time is outside sleep time range, calculate remaining time till next sleep
                const nextSleepStart = moment().tz('Asia/Shanghai').startOf('day').add(sleepStartMinute, 'minutes');
                if (now.isAfter(nextSleepStart)) {
                    nextSleepStart.add(1, 'day');
                }
                setRemainingTime(nextSleepStart.diff(now));
                setSleepReminder('');
            }
        };

        // Calculate remaining time initially
        calculateRemainingTime();

        // Update remaining time every second
        const timer = setInterval(() => {
            calculateRemainingTime();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (milliseconds: number): string => {
        const duration = moment.duration(milliseconds);
        const hours = String(Math.floor(duration.asHours())).padStart(2, '0');
        const minutes = String(duration.minutes()).padStart(2, '0');
        const seconds = String(duration.seconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#0A716B',
        }}
        >
            <Text
                style={{
                    color: '#eee'
                }}
            >
                倒计时：
            </Text>
            <FontAwesomeIcon
                icon={faClock}
                size={16}
                color={'orangered'}
                style={{

                }}
            />
            <Text> </Text>
            {sleepReminder ?
                <Text>
                    {sleepReminder}
                </Text> :
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'orangered',
                }}
                >
                    {formatTime(remainingTime)}
                </Text>
            }
        </View>
    );
};

export default CountdownTimer;
