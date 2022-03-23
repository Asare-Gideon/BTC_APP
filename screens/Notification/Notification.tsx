import { View, Text } from 'react-native';
import React from 'react';
import { Sizes } from '../../constants/Layout';

const Notification = () => {
	return (
		<View
			style={{
				paddingTop: Sizes.paddingTop,
				flex: 1
			}}
		>
			<Text>Notification</Text>
		</View>
	);
};

export default Notification;
