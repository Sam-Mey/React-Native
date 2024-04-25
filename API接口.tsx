import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

interface getLotteryResultsProps {
    expect?: boolean;
    openCode?: boolean;
    zodiac?: boolean;
    openTime?: boolean;
    wave?: boolean;
    info?: boolean;
}

type LotteryResult = {
    expect: string;
    openCode: string;
    zodiac: string;
    openTime: string;
    wave: string;
    info: string;
};

const getLotteryResults: React.FC<getLotteryResultsProps> = ({ }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<LotteryResult[]>([]);

    const getLotteryResults = async () => {
        try {
            const response = await fetch('https://api.macaumarksix.com/api/live2');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getLotteryResults();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ expect }) => expect}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, backgroundColor: '#000' }}>
                            <View>
                                <Text>第: {item.expect} 期</Text>
                                <Text>开奖时间: {item.openTime}</Text>
                                <Text>信息: {item.info}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.openCodeWithzodiacContainer}>
                                    {/* 第 1 个开奖号码 */}
                                    <View style={{ backgroundColor: item.wave.split(',')[0], borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.openCode.split(',')[0]}</Text>
                                    </View>
                                    {/* 第 1 个生肖 */}
                                    <View style={styles.zodiacContainer}>
                                        <Text style={{ fontSize: 14 }}>{item.zodiac.split(',')[0]}</Text>
                                    </View>
                                </View>
                                <View style={styles.openCodeWithzodiacContainer}>
                                    {/* 第 2 个开奖号码 */}
                                    <View style={{ backgroundColor: item.wave.split(',')[1], borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.openCode.split(',')[1]}</Text>
                                    </View>
                                    {/* 第 2 个生肖 */}
                                    <View style={styles.zodiacContainer}>
                                        <Text style={{ fontSize: 14 }}>{item.zodiac.split(',')[1]}</Text>
                                    </View>
                                </View>
                                <View style={styles.openCodeWithzodiacContainer}>
                                    {/* 第 3 个开奖号码 */}
                                    <View style={{ backgroundColor: item.wave.split(',')[2], borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.openCode.split(',')[2]}</Text>
                                    </View>
                                    {/* 第 3 个生肖 */}
                                    <View style={styles.zodiacContainer}>
                                        <Text style={{ fontSize: 14 }}>{item.zodiac.split(',')[2]}</Text>
                                    </View>
                                </View>
                                <View style={styles.openCodeWithzodiacContainer}>
                                    {/* 第 4 个开奖号码 */}
                                    <View style={{ backgroundColor: item.wave.split(',')[3], borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.openCode.split(',')[3]}</Text>
                                    </View>
                                    {/* 第 4 个生肖 */}
                                    <View style={styles.zodiacContainer}>
                                        <Text style={{ fontSize: 14 }}>{item.zodiac.split(',')[3]}</Text>
                                    </View>
                                </View>
                                <View style={styles.openCodeWithzodiacContainer}>
                                    {/* 第 5 个开奖号码 */}
                                    <View style={{ backgroundColor: item.wave.split(',')[4], borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.openCode.split(',')[4]}</Text>
                                    </View>
                                    {/* 第 5 个生肖 */}
                                    <View style={styles.zodiacContainer}>
                                        <Text style={{ fontSize: 14 }}>{item.zodiac.split(',')[4]}</Text>
                                    </View>
                                </View>

                                <View style={styles.openCodeWithzodiacContainer}>
                                    {/* 第 6 个开奖号码 */}
                                    <View style={{ backgroundColor: item.wave.split(',')[5], borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.openCode.split(',')[5]}</Text>
                                    </View>
                                    {/* 第 6 个生肖 */}
                                    <View style={styles.zodiacContainer}>
                                        <Text style={{ fontSize: 14 }}>{item.zodiac.split(',')[5]}</Text>
                                    </View>
                                </View>

                                {/* 加号 */}
                                <View style={styles.openCodeWithzodiacContainer}>
                                    <View style={{ backgroundColor: 'gray', borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
                                    </View>
                                </View >

                                <View style={styles.openCodeWithzodiacContainer}>
                                    {/* 最后一个开奖号码 */}
                                    <View style={{ backgroundColor: item.wave.split(',')[6], borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.openCode.split(',')[6]}</Text>
                                    </View>
                                    {/* 最后一个生肖 */}
                                    <View style={styles.zodiacContainer}>
                                        <Text style={{ fontSize: 14 }}>{item.zodiac.split(',')[6]}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            )}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },

    openCodeWithzodiacContainer: {
        alignItems: 'center',
        backgroundColor: 'cornsilk',
    },
    openCodeAndzodiaGroup: {
        alignItems: 'center',
        backgroundColor: 'cornsilk',
    },
    zodiacContainer: {
        borderRadius: 20,
        width: 30,
        height: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default getLotteryResults;