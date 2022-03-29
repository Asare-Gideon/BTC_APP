import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen/Home';
import Add from '../screens/AddScreen/Add';
import Detail from '../screens/DetailScreen/Detail';
import Notification from '../screens/Notification/Notification';
import Edit from '../screens/EditScreen/Edit';
import { SecondHomeNavParams } from '../types';
import NewHome from '../screens/NewHomeScreen/NewHome';
import NewAdd from '../screens/NewAddScreen/NewAdd';
import NewDetail from '../screens/NewDetailScreen/NewDetail';
import NewEdit from '../screens/NewEditScreen/NewEdit';

const Stack = createNativeStackNavigator<SecondHomeNavParams>();

const HomeNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName="NewHomeScreen"
		>
			<Stack.Screen name="NewHomeScreen" component={NewHome} />
			<Stack.Screen name="NewAddScreen" component={NewAdd} />
			<Stack.Screen name="NewDetailScreen" component={NewDetail} />
			<Stack.Screen name="Notification" component={Notification} />
			<Stack.Screen name="NewEdit" component={NewEdit} />
		</Stack.Navigator>
	);
};

export default HomeNav;
