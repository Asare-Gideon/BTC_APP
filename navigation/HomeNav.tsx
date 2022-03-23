import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavParams } from '../types';
import Home from '../screens/HomeScreen/Home';
import Add from '../screens/AddScreen/Add';
import Detail from '../screens/DetailScreen/Detail';
import Notification from '../screens/Notification/Notification';

const Stack = createNativeStackNavigator<HomeNavParams>();

const HomeNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName="HomeScreen"
		>
			<Stack.Screen name="HomeScreen" component={Home} />
			<Stack.Screen name="AddScreen" component={Add} />
			<Stack.Screen name="DetailScreen" component={Detail} />
			<Stack.Screen name="Notification" component={Notification} />
		</Stack.Navigator>
	);
};

export default HomeNav;
