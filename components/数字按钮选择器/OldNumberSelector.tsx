// import React, { useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, Image } from 'react-native';
// import ZodiacOptions from '../interface/ZodiacOptions';


// const NumberSelector = () => {

//     //=======================================================
//     // 引入 按钮组件
//     const options = [
//         { title: '大', onPress: () => handleSelectBig() },
//         { title: '小', onPress: () => handleSelectSmall() },
//         { title: '单', onPress: () => handleSelectOdd() },
//         { title: '双', onPress: () => handleSelectSmall() },
//         // { title: '大单', onPress: () => handleSelect() },
//         // { title: '大双', onPress: () => handleSelect() },
//         // { title: '小单', onPress: () => handleSelect() },
//         // { title: '小双', onPress: () => handleSelect() },


//         // { title: '', onPress: () => handleOptionPress('6') },
//         // { title: '', onPress: () => handleOptionPress('6') },
//         // { title: '', onPress: () => handleOptionPress('6') },
//         // { title: '', onPress: () => handleOptionPress('6') },
//         // { title: '', onPress: () => handleOptionPress('6') },
//         // { title: '', onPress: () => handleOptionPress('6') },
//         // 添加更多选项按钮
//     ];
//     //===========================================================================

//     const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
//     const [selectedMoney, setSelectedMoney] = useState<string>(''); // 将类型从 number 更改为 string

//     const handleNumberSelect = (number: number) => {
//         if (selectedNumbers.includes(number)) {
//             // 如果数字已经选中，则取消选择
//             setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
//         } else {
//             // 否则将数字添加到选中列表中
//             setSelectedNumbers([...selectedNumbers, number]);
//         }
//     };

//     const handleMoneyChange = (text: string) => {
//         setSelectedMoney(text); // 直接设置为用户输入的字符串
//     };

//     // map 方法 {提交逻辑判断}
//     const handleSubmit = () => {
//         let data = selectedNumbers.map(number => [selectedMoney, number]); // 将 selectedMoney 与每个 selectedNumber 组合成新的数据
//         if (selectedNumbers.length > 0 && selectedMoney !== '') { // 检查金额不为 null
//             console.log('提交的数据:', data);
//             // 清空输入框
//             setSelectedNumbers([]);
//             setSelectedMoney(''); // 将金额设置为 null
//         } else {
//             console.log('请先选择一个数字并输入金额');
//         }
//     };

//     // 大
// const handleSelectBig = () => {
//     // 将所有25-49数字添加到已选数组中
//     const bigNumbers = Array.from({ length: 25 }, (_, index) => index + 25);

//     // 如果已选数组中包含偶数数组，则移除偶数数组中的所有元素
//     if (selectedNumbers.some(number => bigNumbers.includes(number))) {
//         setSelectedNumbers(selectedNumbers.filter(number => !bigNumbers.includes(number)));
//     } else {
//         // 否则，添加偶数数组中的所有元素到已选数组中
//         setSelectedNumbers([...selectedNumbers, ...bigNumbers]);
//     }
//     };
//     // 小
// const handleSelectSmall = () => {
//     // 将所有01-24数字添加到已选数组中
//     const smallNumbers = Array.from({ length: 24 }, (_, index) => index + 1);

//     // 如果已选数组中包含偶数数组，则移除偶数数组中的所有元素
//     if (selectedNumbers.some(number => smallNumbers.includes(number))) {
//         setSelectedNumbers(selectedNumbers.filter(number => !smallNumbers.includes(number)));
//     } else {
//         // 否则，添加偶数数组中的所有元素到已选数组中
//         setSelectedNumbers([...selectedNumbers, ...smallNumbers]);
//     }
// };
//     // 单
//     const handleSelectOdd = () => {
//         // 将所有奇数数字添加到已选数组中
//         const oddNumbers: number[] = [];
//         for (let i = 1; i <= 49; i++) {
//             // 如果当前数字是奇数，则将其添加到数组中
//             if (i % 2 !== 0) {
//                 oddNumbers.push(i);
//             }
//         }

//         // 如果已选数组中包含偶数数组，则移除偶数数组中的所有元素
//         if (selectedNumbers.some(number => oddNumbers.includes(number))) {
//             setSelectedNumbers(selectedNumbers.filter(number => !oddNumbers.includes(number)));
//         } else {
//             // 否则，添加奇数数组中的所有元素到已选数组中
//             setSelectedNumbers([...selectedNumbers, ...oddNumbers]);
//         }
//     };
//     // 双
//     const handleSelectEven = () => {
//         // 将所有偶数数字添加到已选数组中
//         const evenNumbers: number[] = [];
//         for (let i = 1; i <= 49; i++) {
//             // 如果当前数字是偶数，则将其添加到数组中
//             if (i % 2 === 0) {
//                 evenNumbers.push(i);
//             }
//         }

//         // 如果已选数组中包含奇数数组，则移除奇数数组中的所有元素
//         if (selectedNumbers.some(number => evenNumbers.includes(number))) {
//             setSelectedNumbers(selectedNumbers.filter(number => !evenNumbers.includes(number)));
//         } else {
//             // 否则，添加偶数数组中的所有元素到已选数组中
//             setSelectedNumbers([...selectedNumbers, ...evenNumbers]);
//         }
//     };
//     // 全选
//     const handleSelectAll = () => {
//         // 将所有数字添加到已选数组中
//         const allNumbers = Array.from({ length: 49 }, (_, index) => index + 1);

//         // 如果已选数组中包含偶数数组，则移除偶数数组中的所有元素
//         if (selectedNumbers.some(number => allNumbers.includes(number))) {
//             setSelectedNumbers(selectedNumbers.filter(number => !allNumbers.includes(number)));
//         } else {
//             // 否则，添加偶数数组中的所有元素到已选数组中
//             setSelectedNumbers([...selectedNumbers, ...allNumbers]);
//         }
//     };
//     // 清空全部 (重置)
//     const handleDeselectAll = () => {
//         // 清空已选数组
//         setSelectedNumbers([]);
//     };
//     // 快速输入数字
//     const handleNumberPress = (number: number) => {
//         setSelectedMoney(number.toString());
//     };

//     return (
//         <View style={styles.container}>
//             {/* <View style={styles.siderBar}></View> */}
//             <ZodiacOptions options={options} />
//             <ScrollView>
//                 <View style={{
//                     borderWidth: 1,
//                     margin: 10,
//                     // backgroundColor: 'red',
//                 }}
//                 >
//                     <View style={{
//                         backgroundColor: '#ccc',
//                         justifyContent: 'flex-start',
//                         alignItems: 'center',

//                     }}
//                     >
//                         <Text style={{ fontWeight: 'bold', }}>数字 A</Text>
//                     </View>

//                     <View style={styles.topButtonContainer}>
//                         {/* Big numbers */}
//                         <TouchableOpacity
//                             style={styles.actionButton}
//                             onPress={() => handleSelectBig()}
//                         >
//                             <Text style={styles.buttonText}>大</Text>
//                         </TouchableOpacity>
//                         {/* Small numbers */}
//                         <TouchableOpacity
//                             style={styles.actionButton}
//                             onPress={() => handleSelectSmall()}
//                         >
//                             <Text style={styles.buttonText}>小</Text>
//                         </TouchableOpacity>
//                         {/* Odd numbers */}
//                         <TouchableOpacity
//                             style={styles.actionButton}
//                             onPress={() => handleSelectOdd()}
//                         >
//                             <Text style={styles.buttonText}>单</Text>
//                         </TouchableOpacity>
//                         {/* Even numbers */}
//                         <TouchableOpacity
//                             style={styles.actionButton}
//                             onPress={() => handleSelectEven()}
//                         >
//                             <Text style={styles.buttonText}>双</Text>
//                         </TouchableOpacity>
//                         {/* All numbers */}
//                         <TouchableOpacity
//                             style={styles.actionButton}
//                             onPress={() => handleSelectAll()}
//                         >
//                             <Text style={styles.buttonText}>全选</Text>
//                         </TouchableOpacity>
//                         {/* Cancel all */}
//                         <TouchableOpacity
//                             style={styles.actionButton}
//                             onPress={() => handleDeselectAll()}
//                         >
//                             <Text style={styles.buttonText}>重置</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 {/* Number Selector */}
//                 <View style={styles.numberButtonContainerBox}>
//                     {[...Array(49).keys()].map((number) => (
//                         <TouchableOpacity
//                             key={number}
//                             style={[
//                                 styles.numberButtonSelectText,
//                                 //  Background style after index selection （Red）
//                                 selectedNumbers.includes(number + 1) && (
//                                     (number === 0 || number === 1 || number === 6 || number === 7 ||
//                                         number === 11 || number === 12 || number === 17 || number === 18 ||
//                                         number === 22 || number === 23 || number === 28 || number === 29 ||
//                                         number === 33 || number === 34 || number === 39 || number === 44 ||
//                                         number === 45)
//                                 ) && styles.selectedNumberButtonRed,
//                                 //  Background style after index selection （Blue）
//                                 selectedNumbers.includes(number + 1) &&
//                                 (
//                                     (number === 2 || number === 3 || number === 8 || number === 9 ||
//                                         number === 13 || number === 14 || number === 19 || number === 24 ||
//                                         number === 25 || number === 30 || number === 35 || number === 36 ||
//                                         number === 40 || number === 41 || number === 46 || number === 47)
//                                 ) && styles.selectedNumberButtonBlue,
//                                 //  Background style after index selection （Green）
//                                 selectedNumbers.includes(number + 1) &&
//                                 (
//                                     (number === 4 || number === 5 || number === 10 || number === 15 ||
//                                         number === 16 || number === 20 || number === 21 || number === 26 ||
//                                         number === 27 || number === 31 || number === 32 || number === 37 ||
//                                         number === 38 || number === 42 || number === 43 || number === 48)
//                                 ) && styles.selectedNumberButtonGreen,
//                             ]}
//                             onPress={() => handleNumberSelect(number + 1)}
//                         >
//                             {/* Text style before index selection  */}
//                             <Text
//                                 style={[
//                                     { fontSize: 16 },
//                                     (number === 0 || number === 1 || number === 6 || number === 7 ||
//                                         number === 11 || number === 12 || number === 17 || number === 18 ||
//                                         number === 22 || number === 23 || number === 28 || number === 29 ||
//                                         number === 33 || number === 34 || number === 39 || number === 44 ||
//                                         number === 45)
//                                     && { color: 'red' },
//                                     (number === 2 || number === 3 || number === 8 || number === 9 ||
//                                         number === 13 || number === 14 || number === 19 || number === 24 ||
//                                         number === 25 || number === 30 || number === 35 || number === 36 ||
//                                         number === 40 || number === 41 || number === 46 || number === 47)
//                                     && { color: 'blue' },
//                                     (number === 4 || number === 5 || number === 10 || number === 15 ||
//                                         number === 16 || number === 20 || number === 21 || number === 26 ||
//                                         number === 27 || number === 31 || number === 32 || number === 37 ||
//                                         number === 38 || number === 42 || number === 43 || number === 48)
//                                     && { color: 'green' },

//                                     selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText,
//                                 ]}
//                             >
//                                 {/* Format Rules */}
//                                 {number < 9 ? `0${number + 1}` : number + 1}
//                             </Text>

//                             <Text style={[
//                                 { color: 'gray', fontSize: 12 },
//                                 selectedNumbers.includes(number + 1) && styles.selectedNumberButtonText
//                             ]}
//                             >
//                                 {"赔率48.8"}
//                             </Text>
//                         </TouchableOpacity>
//                     ))}
//                 </View>
//             </ScrollView>

//             <View style={styles.bottomButtonContainer}>
//                 <Text style={{ color: '#ddd' }}>快捷：</Text>
//                 {[10, 20, 50, 100, 200].map((number) => (
//                     <TouchableOpacity
//                         key={number}
//                         style={[
//                             styles.numberButtonKey,
//                             selectedMoney === number.toString() && styles.selectedButton // 添加选中样式
//                         ]}
//                         onPress={() => handleNumberPress(number)}
//                     >
//                         <Image
//                             source={require('../../../../assets/chips/image.png')} // 替换成你的图片路径
//                             style={styles.image}
//                             resizeMode="contain" // 使图片适应容器
//                         />
//                         <Text style={styles.numberButtonText}>{number}</Text>
//                     </TouchableOpacity>
//                 ))}

//                 <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="输入数字"
//                         placeholderTextColor="gray"
//                         keyboardType="numeric"
//                         onChangeText={handleMoneyChange}
//                         value={selectedMoney} // 直接将数字设置为状态中的值
//                     />
//                     <Text style={styles.submitButtonText}>提交</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         // backgroundColor: '#fff',
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },

//     siderBar: {
//         backgroundColor: 'red',
//         width: 30,
//         height: 50,
//     },

//     numberButtonContainerBox: {
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: 'gray',
//         width: 'auto',
//         // margin: 10,
//         // backgroundColor: 'red',
//     },
//     numberButtonSelectText: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ddd',
//         borderWidth: 1,
//         borderColor: 'gray',
//         margin: 5,
//         width: 60,
//         height: 60,
//         borderRadius: 5,
//     },

//     selectedNumberButtonText: {
//         color: 'white', // 选中状态的背景颜色
//     },

//     selectedNumberButtonRed: {
//         backgroundColor: 'red', // 选中状态的背景颜色
//     },

//     selectedNumberButtonBlue: {
//         backgroundColor: 'blue', // 选中状态的背景颜色
//     },

//     selectedNumberButtonGreen: {
//         backgroundColor: 'green', // 选中状态的背景颜色
//     },

//     topButtonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         flexWrap: 'wrap', // 允许子元素换行
//         alignItems: 'center', // 在交叉轴上居中对齐
//     },

//     actionButton: {
//         backgroundColor: '#add8e6',
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         width: 50,
//     },

//     buttonText: {
//         color: 'orangered',
//         fontSize: 14,
//     },

//     submitButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'blue',
//         padding: 10,
//         borderRadius: 5,
//         fontSize: 18,
//     },

//     submitButtonText: {
//         fontSize: 14,
//         textAlign: 'center',
//         color: 'white',
//     },

//     input: {
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 5,
//         padding: 5,
//         marginHorizontal: 5,
//         height: 40,
//         width: 80,
//         fontSize: 14,
//         color: '#fff',
//         left: -10,
//     },

//     bottomButtonContainer: {
//         backgroundColor: '#000',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 100,
//         borderRadius: 5,
//     },

//     selectedButton: { // 选中时的颜色
//         backgroundColor: 'blue',
//     },

//     numberButtonKey: {
//         flexDirection: 'row',
//         alignItems: 'center', // 水平居中
//         justifyContent: 'center', // 垂直居中
//         backgroundColor: 'green',
//         padding: 10,
//         marginHorizontal: 3,
//         borderRadius: 360,
//         width: 40,
//         height: 40,
//     },

//     numberButtonText: {
//         color: 'white',
//         fontSize: 12,
//         position: 'absolute', // 文本绝对定位于按钮上
//         zIndex: 1,
//     },

//     image: {
//         width: 50, // 将图片宽度设置为自适应
//         height: 50,
//         zIndex: 0, // 确保图片在文字之下
//         borderRadius: 360,
//         left: 2,
//     },
// });

// export default NumberSelector;