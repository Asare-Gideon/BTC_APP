import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { Button, Input } from 'react-native-elements';
import { Colors } from '../../constants/Layout';

interface prop {
	setLogin: any;
}

const Login = ({ setLogin }: prop) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ isErr, setIsErr ] = useState(false);

	const handleEmail = (e: any) => {
		setEmail(e);
	};
	const handleErr = () => {
		setIsErr(true);

		setTimeout(() => {
			setIsErr(false);
		}, 4000);
	};
	const handlePress = async () => {
		setIsLoading(true);
		let getLogin = await fetch(`https://bomso-town-church.herokuapp.com/api/login/?email=${email}`, {
			method: 'GET',
			headers: { 'Content-type': 'application/json' }
		});

		let login = await getLogin.json();
		console.log(login);
		if (login.login) {
			setIsLoading(false);
			setLogin(true);
			console.log('login work');
		} else {
			setIsLoading(false);
			handleErr();
		}
	};

	return (
		<View style={styles.main}>
			<View>
				<Text style={styles.text}>Bomso Town Church</Text>
				{isErr ? <Text style={styles.error}>Please enter correct email address</Text> : null}
				<View style={styles.inputCont}>
					<Input placeholder="enter Email" onChangeText={(e) => handleEmail(e)} />
				</View>

				<Button
					onPress={handlePress}
					title={'Login'}
					loading={isLoading}
					containerStyle={styles.submitBtn}
					buttonStyle={{
						backgroundColor: Colors.primary,
						borderRadius: 3
					}}
				/>
			</View>
		</View>
	);
};

export default Login;
