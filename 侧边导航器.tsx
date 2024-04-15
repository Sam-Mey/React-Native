import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// Define the type for the Root Stack Param List
type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number };
};

// Define the type for the Drawer Navigator Param List
type DrawerParamList = {
    HomeStack: undefined;
};

// Define the type for the Drawer Navigation Prop
type DrawerNavigationProps = DrawerNavigationProp<DrawerParamList>;

// Define the type for the Stack Navigation Prop
type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;
type DetailsScreenRouteProps = RouteProp<RootStackParamList, 'Details'>;

// Home screen component
const HomeScreen: React.FC<{ navigation: HomeScreenNavigationProps }> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', { itemId: 123 })}
            />
        </View>
    );
};

// Details screen component
const DetailsScreen: React.FC<{ route: DetailsScreenRouteProps }> = ({ route }) => {
    const { itemId } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details Screen</Text>
            <Text>Item ID: {itemId}</Text>
        </View>
    );
};

// Drawer navigator component
const Drawer = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
        </Drawer.Navigator>
    );
};

// Stack navigator component for Home screen
const HomeStack = createStackNavigator<RootStackParamList>();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
};

// App component
const App: React.FC = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default App;
