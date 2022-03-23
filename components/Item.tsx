import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Colors, Fonts } from '../constants/Layout';
import { cartsProp } from '../Types';

const Item = ({ name, image, text, roomNum, navigation, data, allData, setAllData }: cartsProp) => {
	const [ titleUpdate, setTitleUpdate ] = useState<string>('');
	const [ textUpdate, setDescriptionUpdate ] = useState('');

	const createTwoButtonAlert = () =>
		Alert.alert(`${data.name}`, 'Are your sure you want to delete this?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel'
			},
			{ text: 'Yes', onPress: () => handleDelete() }
		]);

	const handleDelete = async () => {
		try {
			await fetch(
				`https://bomso-town-church.herokuapp.com/api/deletepost/?postid=${data._id}&imgid=${data.imgPublicId}`,
				{
					method: 'DELETE',
					headers: { 'Content-type': 'application/json' }
				}
			);
			let filterdData = allData.filter((item) => item._id != data._id);
			setAllData(filterdData);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(
		() => {
			if (name && name.length > 17) {
				const newTitle = name.substr(0, 17).concat('...');
				setDescriptionUpdate(newTitle);
			} else {
				setDescriptionUpdate(name);
			}
			if (text && text.length > 36) {
				const newText = text.substr(0, 35).concat('...');
				setTitleUpdate(newText);
			} else {
				setTitleUpdate(text);
			}
		},
		[ name, text ]
	);

	const handleNav = () => {
		navigation.navigate('DetailScreen', { data });
		console.log(data);
	};

	return (
		<TouchableOpacity
			onPress={handleNav}
			style={{
				width: '100%',
				backgroundColor: Colors.white,
				borderRadius: 10,
				padding: 5,
				flexDirection: 'row',
				marginBottom: 6,
				elevation: 2,
				marginTop: 4
			}}
		>
			<View style={{ flex: 0.2, height: 85 }}>
				<Image
					source={{ uri: image }}
					style={{
						width: '100%',
						height: '100%',
						borderRadius: 4
					}}
				/>
			</View>
			<View
				style={{
					marginLeft: 13,
					flex: 0.8
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<View>
						<Text style={{ ...Fonts.body2 }}>{textUpdate}</Text>
						<Text style={{ color: Colors.deepDarkGray }}>{titleUpdate}</Text>
					</View>
					<TouchableOpacity
						onPress={createTwoButtonAlert}
						style={{
							paddingRight: 14,
							paddingTop: 4
						}}
					>
						<AntDesign name="delete" size={23} />
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						padding: 4
					}}
				>
					<Text
						style={{
							...Fonts.body2,
							color: Colors.darkgray
						}}
					>
						Room {roomNum}
					</Text>
					<View
						style={{
							flexDirection: 'row',
							paddingLeft: 5,
							alignItems: 'center'
						}}
					>
						<Text
							style={{
								...Fonts.body3
							}}
						>
							22/12/2020
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Item;
