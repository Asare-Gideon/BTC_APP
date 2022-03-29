import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../app/reduxHooks/hooks';
import { Colors } from '../constants/Layout';
import { postStackNavParams } from '../types';
import HomeNav from './HomeNav';
import SecondNav from './SecondNav';

const Tab = createBottomTabNavigator<postStackNavParams>();
const VendorNavigation = () => {
	const nav = useAppSelector((state) => state.bottomNav.value);

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				title: '',
				tabBarStyle: {
					elevation: 0,
					borderTopWidth: 0,
					backgroundColor: 'white',
					padding: 0,
					height: nav ? 0 : 45
				},
				tabBarHideOnKeyboard: true
			}}
		>
			<Tab.Screen
				name="MainScreen"
				component={HomeNav}
				options={{
					title: 'Present Service',
					tabBarIcon: ({ focused }) => (
						<View style={styles.iconCont}>
							<View>
								<AntDesign
									name="dingding-o"
									size={26}
									color={focused ? '#3d316e' : Colors.deepDarkGray}
								/>
							</View>
						</View>
					)
				}}
			/>
			<Tab.Screen
				name="SecondScreen"
				component={SecondNav}
				options={{
					title: 'World Encounter',
					tabBarIcon: ({ focused }) => (
						<View style={[ styles.iconCont ]}>
							<View>
								<AntDesign name="dropbox" size={30} color={focused ? '#3d316e' : Colors.deepDarkGray} />
							</View>
						</View>
					)
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	iconCont: {
		display: 'flex'
	},
	badge: {
		position: 'absolute',
		top: -10,
		backgroundColor: '#ed554d',
		width: 19,
		height: 19,
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		borderRadius: 30,
		right: -13
	}
});

export default VendorNavigation;
