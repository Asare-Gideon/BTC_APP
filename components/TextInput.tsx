import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Colors, Fonts } from '../constants/Layout';

interface textInputProp {
	name: string;
	onChange?: any;
	value: any;
	errorMessage?: string;
}

const TextInput = ({ name, onChange, value, errorMessage }: textInputProp) => {
	return (
		<View
			style={{
				marginBottom: 8
			}}
		>
			<Input placeholder={name} onChangeText={(e) => onChange(e)} value={value} errorMessage={errorMessage} />
		</View>
	);
};

export default TextInput;
