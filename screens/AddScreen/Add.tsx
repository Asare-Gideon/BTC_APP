import { EvilIcons, Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, Fonts, Sizes } from '../../constants/Layout';
import TextInput from '../../components/TextInput';
import { PostStackProps } from '../../types';
import { styles } from './styles';
import Header from '../../components/Header';
import images from '../../constants/Images';
import * as ImagePicker from 'expo-image-picker';

interface data {
	name: string;
	location: string;
	phoneNumber: string;
	roomNumber: string;
	bacenter: string;
}

const Add = ({ navigation }: PostStackProps) => {
	const [ isNetwork, setIsNetwork ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ isValidated, setIsValidated ] = useState(true);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isSent, setIsSent ] = useState(false);
	const [ image, setImage ] = useState<string>('');
	const [ imgBase64, setImgBase64 ] = useState<any>();
	const [ form, setForm ] = useState<data>({
		name: '',
		location: '',
		phoneNumber: '',
		roomNumber: '',
		bacenter: ''
	});

	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					alert('permison denied');
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			base64: true,
			allowsEditing: true,
			aspect: [ 4, 3 ],
			quality: 1
		});

		if (!result.cancelled) {
			setImage(result.uri);
			setImgBase64(result);
			console.log(imgBase64);
		}
	};
	const handleDelete = (): void => {
		setImage('');
	};
	const clearInput = () => {
		setForm({
			name: '',
			location: '',
			phoneNumber: '',
			roomNumber: '',
			bacenter: ''
		});
	};
	const handleValidation = () => {
		if (
			form.bacenter.length > 2 &&
			form.location.length > 3 &&
			form.name.length > 3 &&
			form.phoneNumber.length > 9 &&
			form.roomNumber.length > 0 &&
			image != ''
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
		}, 3000);
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
			let post = await fetch('https://bomso-town-church.herokuapp.com/api/post', {
				method: 'POST',
				body: JSON.stringify({ data: { ...form, imgUrl: imgBase64 } }),
				headers: { 'Content-type': 'application/json' }
			});
			let finalPost = await post.json();
			if (finalPost) {
				setIsLoading(false);
				clearInput();
				handIsSent();
				setImage('');
			}
		} catch (err) {
			console.log({ error: err });
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.main}>
			<Header title="Add New" navigation={navigation} />

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
					name="Bacenter"
					value={form.bacenter}
					onChange={(e: s) => setForm({ ...form, bacenter: e })}
					errorMessage={
						isValidated ? '' : form.bacenter.length < 2 ? 'Bacenter must be at least 3 characters' : ''
					}
				/>
				<Text style={styles.imageText}>Insert Images</Text>

				<View style={styles.imageCont}>
					{image === '' ? null : (
						<View>
							<TouchableOpacity style={styles.closeBtn} onPress={handleDelete}>
								<EvilIcons name="close-o" size={22} color={Colors.primary} />
							</TouchableOpacity>
							<Image source={{ uri: image }} style={styles.image} />
						</View>
					)}
					{image !== '' ? null : (
						<TouchableOpacity style={styles.addBtn} onPress={pickImage}>
							<Feather name="camera" size={30} />
						</TouchableOpacity>
					)}
				</View>

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
						<Text style={{ ...Fonts.body3, color: Colors.white }}>
							You have successfully added new member
						</Text>
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
							Please make sure to fill all the inputs and add image too
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

export default Add;
