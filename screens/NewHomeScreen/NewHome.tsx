import { View, Text, FlatList, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Style';
import SearchHeader from '../../components/SearchHeader';
import { allDataType, SecondhomeNavProp } from '../../types';
import { FAB } from 'react-native-elements';
import Fuse from 'fuse.js';
import { Colors, Sizes } from '../../constants/Layout';
import { setBottomNav } from '../../features/utilitySlice/bottomSlice';
import { useAppDispatch } from '../../app/reduxHooks/hooks';
import NewItem from '../../components/NewItem';

const NewHome = ({ navigation }: SecondhomeNavProp) => {
	const [ allData, setAllData ] = useState<allDataType[]>([]);
	const [ search, setSearch ] = useState([]);
	const [ isData, setIsData ] = useState(false);
	const dispatch = useAppDispatch();

	const options = {
		includeScore: true,
		shouldSort: true,
		keys: [ 'name', 'roomNumber' ]
	};
	const fuse = new Fuse(allData as any, options);

	const handleChange = (e: any) => {
		setSearch(fuse.search(e) as any);
	};
	useEffect(() => {
		navigation.addListener('focus', () => {
			dispatch(setBottomNav(false));
		});
	}, []);
	const loadData = async () => {
		try {
			const res = await fetch('https://bomso-town-church.herokuapp.com/api/allencounter');
			const postData = await res.json();
			setAllData(postData);
			if (postData) {
				setIsData(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		navigation.addListener('focus', () => {
			loadData();
		});
	}, []);

	function formatted_date(d: any) {
		let d2 = d.toString().substr(4, 11);
		let d3 = d2.slice(1, 3) + ' /' + d2.slice(4, 6) + ' /' + ' ' + d2.slice(6);
		return d3;
	}

	const renderItem = ({ item }: any) => (
		<NewItem
			name={item.name}
			text={item.location}
			navigation={navigation}
			roomNum={item.roomNumber}
			date={formatted_date(item.date)}
			data={item}
			image={item.imgUrl}
			allData={allData as allDataType[]}
			setAllData={setAllData}
		/>
	);

	const searchItem = ({ item }: any) => (
		<NewItem
			name={item.item.name}
			text={item.item.location}
			navigation={navigation}
			roomNum={item.item.roomNumber}
			date={formatted_date(item.item.date)}
			data={item.item}
			image={item.item.imgUrl}
			allData={allData as allDataType[]}
			setAllData={setAllData}
		/>
	);

	if (isData) {
		return (
			<View style={styles.main}>
				<SearchHeader navigation={navigation as any} onChange={handleChange} />

				{search.length > 0 ? (
					<FlatList
						contentContainerStyle={{
							paddingBottom: 20,
							paddingLeft: 10,
							paddingRight: 10
						}}
						data={search}
						renderItem={searchItem}
						keyExtractor={(id: any) => id.item._id}
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
						onPress={() => navigation.navigate('NewAddScreen')}
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

export default NewHome;
