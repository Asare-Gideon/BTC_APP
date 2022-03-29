import { EvilIcons, Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, Fonts, Sizes } from '../../constants/Layout';
import TextInput from '../../components/TextInput';
import { PostStackProps } from '../../types';
import { styles } from './styles';
import Header from '../../components/Header';
import * as ImagePicker from 'expo-image-picker';
import { setBottomNav } from '../../features/utilitySlice/bottomSlice';
import { useAppDispatch } from '../../app/reduxHooks/hooks';

interface data {
	name: string;
	location: string;
	phoneNumber: string;
	roomNumber: string;
	bacenter: string;
}

const Edit = ({ navigation, route }: PostStackProps) => {
	const [ isNetwork, setIsNetwork ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ isValidated, setIsValidated ] = useState(true);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isSent, setIsSent ] = useState(false);
	const [ image, setImage ] = useState<string>('');
	const [ imgBase64, setImgBase64 ] = useState<any>();
	const dispatch = useAppDispatch();
	const [ form, setForm ] = useState<data>({
		name: '',
		location: '',
		phoneNumber: '',
		roomNumber: '',
		bacenter: ''
	});

	useEffect(() => {
		navigation.addListener('focus', () => {
			dispatch(setBottomNav(true));
			setForm({
				...form,
				name: (route.params as any).name,
				location: (route.params as any).location,
				phoneNumber: (route.params as any).phoneNumber,
				roomNumber: (route.params as any).roomNumber,
				bacenter: (route.params as any).bacenter
			});
		});
	}, []);

	const handleValidation = () => {
		if (
			form.bacenter.length > 2 &&
			form.location.length > 3 &&
			form.name.length > 3 &&
			form.phoneNumber.length > 9 &&
			form.roomNumber.length > 0
		) {
			setIsValidated(true);
			handleSubmit();
		} else {
			setIsValidated(false);
			setIsLoading(false);
			handErrMsg();
		}
	};
	const handIsSent = () => {
		setIsSent(true);
		setTimeout(() => {
			setIsSent(false);
		}, 3000);
	};
	const handErrMsg = () => {
		setIsError(true);
		setTimeout(() => {
			setIsError(false);
		}, 5000);
	};
	const handleName = (e: string) => {
		setForm({
			...form,
			name: e
		});
	};
	type s = string;

	const handleSubmit = async () => {
		setIsLoading(true);
		try {
			let post = await fetch(
				`https://bomso-town-church.herokuapp.com/api/update/?postid=${(route.params as any)
					._id}&imgid=${(route.params as any).imgPublicId}`,
				{
					method: 'PATCH',
					body: JSON.stringify({ data: { ...form } }),
					headers: { 'Content-type': 'application/json' }
				}
			);
			let finalPost = await post.json();
			if (finalPost) {
				setIsLoading(false);
				handIsSent();
			}
		} catch (err) {
			console.log({ error: err });
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.main}>
			<Header title="Edit" navigation={navigation} />

			<ScrollView style={styles.contentCont}>
				<TextInput
					name="Full Name"
					onChange={handleName}
					value={form.name}
					errorMessage={isValidated ? '' : form.name.length < 3 ? 'Name must be at least 4 characters' : ''}
				/>
				<TextInput
					name="Location"
					value={form.location}
					onChange={(e: s) => setForm({ ...form, location: e })}
					errorMessage={
						isValidated ? '' : form.location.length < 3 ? 'Location must be at least 4 characters' : ''
					}
				/>
				<TextInput
					name="Phone Number"
					value={form.phoneNumber}
					onChange={(e: s) => setForm({ ...form, phoneNumber: e })}
					errorMessage={
						isValidated ? '' : form.phoneNumber.length < 10 ? 'Please enter valid phone number' : ''
					}
				/>
				<TextInput
					name="Room number"
					value={form.roomNumber}
					onChange={(e: s) => setForm({ ...form, roomNumber: e })}
					errorMessage={isValidated ? '' : form.roomNumber.length > 0 ? '' : 'Please enter romm number'}
				/>
				<TextInput
					name="Basonter"
					value={form.bacenter}
					onChange={(e: s) => setForm({ ...form, bacenter: e })}
					errorMessage={
						isValidated ? '' : form.bacenter.length < 2 ? 'Bacenter must be at least 3 characters' : ''
					}
				/>
				<Button
					onPress={handleValidation}
					title={'Submit Product'}
					loading={isLoading}
					containerStyle={styles.submitBtn}
					buttonStyle={{
						backgroundColor: Colors.primary,
						borderRadius: 3
					}}
				/>
				{isSent ? (
					<View
						style={{
							backgroundColor: Colors.primary,
							padding: 4,
							position: 'absolute',
							left: 7,
							right: 7,
							bottom: 130,
							paddingLeft: 6,
							display: 'none',
							borderRadius: 8
						}}
					>
						<Text style={{ ...Fonts.body3, color: Colors.white, textAlign: 'center' }}>Edit is done!</Text>
					</View>
				) : null}

				{isError ? (
					<View
						style={{
							backgroundColor: '#ed3b09',
							padding: 4,
							position: 'absolute',
							left: 7,
							right: 7,
							bottom: 150,
							paddingLeft: 6,
							display: 'none',
							borderRadius: 8
						}}
					>
						<Text style={{ ...Fonts.body3, color: Colors.white }}>
							Please make sure to fill all the inputs
						</Text>
					</View>
				) : null}

				<View
					style={{
						height: 30
					}}
				/>
			</ScrollView>
		</View>
	);
};

export default Edit;
