import { View, Text } from 'react-native';
import React from 'react';
import { Sizes } from '../../constants/Layout';

const Notification = () => {
	return (
		<View
			style={{
				paddingTop: Sizes.paddingTop,
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				width: Sizes.width,
				height: Sizes.height
			}}
		>
			<Text>No Notification yet</Text>
		</View>
	);
};

export default Notification;
