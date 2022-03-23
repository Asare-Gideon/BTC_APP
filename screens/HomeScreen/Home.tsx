import { View, Text, FlatList, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Style';
import SearchHeader from '../../components/SearchHeader';
import { allDataType, homeNavProp } from '../../types';
import Item from '../../components/Item';
import { FAB } from 'react-native-elements';
import Fuse from 'fuse.js';
import { Colors, Sizes } from '../../constants/Layout';

const Home = ({ navigation }: homeNavProp) => {
	const [ allData, setAllData ] = useState<allDataType[]>([]);
	const [ search, setSearch ] = useState([]);

	const options = {
		includeScore: true,
		shouldSort: true,
		keys: [ 'name', 'roomNumber' ]
	};
	const fuse = new Fuse(allData as any, options);

	const handleChange = (e: any) => {
		setSearch(fuse.search(e) as any);
	};

	const loadData = async () => {
		try {
			const res = await fetch('https://bomso-town-church.herokuapp.com/api/allpost');
			const postData = await res.json();
			setAllData(postData);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		navigation.addListener('focus', () => {
			loadData();
		});
	}, []);

	const renderItem = ({ item }: any) => (
		<Item
			name={item.name}
			text={item.location}
			navigation={navigation}
			roomNum={item.roomNumber}
			date={item.date}
			data={item}
			image={item.imgUrl}
			allData={allData as allDataType[]}
			setAllData={setAllData}
		/>
	);

	const searchItem = ({ item }: any) => (
		<Item
			name={item.item.name}
			text={item.item.location}
			navigation={navigation}
			roomNum={item.item.roomNumber}
			date={item.item.date}
			data={item.item}
			image={item.item.imgUrl}
			allData={allData as allDataType[]}
			setAllData={setAllData}
		/>
	);

	if (allData.length > 0) {
		return (
			<View style={styles.main}>
				<SearchHeader navigation={navigation} onChange={handleChange} />

				{search.length > 0 ? (
					<FlatList
						contentContainerStyle={{
							paddingBottom: 20,
							paddingLeft: 10,
							paddingRight: 10
						}}
						data={search}
						renderItem={searchItem}
						keyExtractor={(id) => id.item._id}
					/>
				) : (
					<FlatList
						contentContainerStyle={{
							paddingBottom: 20,
							paddingLeft: 10,
							paddingRight: 10
						}}
						data={allData}
						renderItem={renderItem}
						keyExtractor={(id) => id._id}
					/>
				)}

				<View style={styles.addButton}>
					<FAB
						visible={true}
						icon={{ name: 'add', color: 'white' }}
						color={'#0d0f38'}
						placement="right"
						containerStyle={{
							elevation: 10,
							borderRadius: 40,
							alignSelf: 'center'
						}}
						buttonStyle={{ borderRadius: 30 }}
						onPress={() => navigation.navigate('AddScreen')}
					/>
				</View>
			</View>
		);
	} else {
		return (
			<View
				style={{
					flex: 1,
					width: Sizes.width,
					height: Sizes.height,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<ActivityIndicator size={50} color={Colors.primary} />
			</View>
		);
	}
};

export default Home;
