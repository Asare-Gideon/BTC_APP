import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './style';
import Header from '../../components/Header';
import { SecondhomeNavProp } from '../../types';
import { useAppDispatch } from '../../app/reduxHooks/hooks';
import { setBottomNav } from '../../features/utilitySlice/bottomSlice';

const NewDetail = ({ navigation, route }: SecondhomeNavProp) => {
	const {
		name,
		location,
		phoneNumber,
		bacenter,
		roomNumber,
		imgUrl,
		imgPublicId,
		_id: string
	} = (route.params as any).data;
	const dispatch = useAppDispatch();
	const handleEdit = () => {
		navigation.navigate('NewEdit', {
			name,
			location,
			phoneNumber,
			bacenter,
			roomNumber,
			imgUrl,
			imgPublicId,
			_id: string
		});
	};
	useEffect(() => {
		navigation.addListener('focus', () => {
			dispatch(setBottomNav(true));
		});
	}, []);

	return (
		<View style={styles.main}>
			<Header title="Details" screenName="NewHomeScreen" navigation={navigation} />
			<ScrollView style={styles.contentCont}>
				<View style={styles.imgCont}>
					<Image source={{ uri: imgUrl }} style={styles.img} />
				</View>

				<View style={styles.infoCont}>
					<View style={styles.flexCont}>
						<Text style={styles.name}>{name}</Text>
						<TouchableOpacity style={styles.edit} onPress={handleEdit}>
							<Text style={styles.editText}>Edit</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.flexCont}>
						<Text style={styles.text}>Location:</Text>
						<Text style={styles.text}>{location}</Text>
					</View>

					<View style={styles.flexCont}>
						<Text style={styles.text}>Phone num:</Text>
						<Text style={styles.text}>{phoneNumber}</Text>
					</View>
					<View style={styles.flexCont}>
						<Text style={styles.text}>Room Num:</Text>
						<Text style={styles.text}>{roomNumber}</Text>
					</View>
					<View style={styles.flexCont}>
						<Text style={styles.text}>Bacenter:</Text>
						<Text style={styles.text}>{bacenter}</Text>
					</View>
				</View>
				<View
					style={{
						height: 40,
						marginBottom: 20
					}}
				/>
			</ScrollView>
		</View>
	);
};

export default NewDetail;
