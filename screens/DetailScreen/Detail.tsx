import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './style';
import Header from '../../components/Header';
import { homeNavProp } from '../../types';
import images from '../../constants/Images';
import { useAppDispatch } from '../../app/reduxHooks/hooks';
import { setBottomNav } from '../../features/utilitySlice/bottomSlice';

const Detail = ({ navigation, route }: homeNavProp) => {
	const { name, location, phoneNumber, bacenter, roomNumber, imgUrl, _id, imgPublicId } = (route.params as any).data;
	const dispatch = useAppDispatch();
	const handleEdit = () => {
		navigation.navigate('Edit', { name, location, phoneNumber, bacenter, roomNumber, imgUrl, _id, imgPublicId });
	};
	useEffect(() => {
		navigation.addListener('focus', () => {
			dispatch(setBottomNav(true));
		});
	}, []);

	return (
		<View style={styles.main}>
			<Header title="Details" navigation={navigation} />
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

export default Detail;
