import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { styles } from './style';
import Header from '../../components/Header';
import { homeNavProp } from '../../types';
import images from '../../constants/Images';

const Detail = ({ navigation, route }: homeNavProp) => {
	const { name, location, phoneNumber, bacenter, roomNumber, imgUrl } = route.params.data;

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
			</ScrollView>
		</View>
	);
};

export default Detail;
