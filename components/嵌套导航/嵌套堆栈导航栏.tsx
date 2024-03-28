/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faGamepad, faUser } from '@fortawesome/free-solid-svg-icons';
// import { Keyboard, Platform } from 'react-native'; // 弹出键盘后隐藏底部导航栏

import SettingsScreen from './app/src/screens/Test/SettingsScreen';
import HomeScreen from './app/src/screens/Home/HomeScreen';
import ProfileScreen from './app/src/screens/Profile/ProfileScreen';
import GamesLobbyScreen from './app/src/screens/Game/GamesLobbyScreen';
import TestScreen from './app/src/screens/Test/TestScreen';
import MacauScreen from './app/src/games/marksixlottery/macau/MacauScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faHome} size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Games"
            component={GamesLobbyScreen}
            options={{
                tabBarLabel: 'Games',
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faGamepad} size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Personal Center"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faUser} size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen name="TestPage" component={TestScreen} />
    </Tab.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Macau" component={MacauScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
