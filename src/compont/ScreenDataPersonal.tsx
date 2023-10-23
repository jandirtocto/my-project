import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from '../button/Header';

const styles = StyleSheet.create({
	view: { height: '100%', textAlign: 'center', alignItems: 'center' },
	viewSecondary: {
		backgroundColor: 'black',
		width: '100%',
		height: 130,
		borderRadius: 4,
		borderColor: '##8F8F8F',
		borderWidth: 3,
	},
	viewThird: {
		backgroundColor: '#FBFBFB',
		width: '100%',
		height: '100%',
		paddingHorizontal: 10,
	},
	textOne: {
		letterSpacing: 2,
		color: '#3A3737',
		borderColor: '#F0F0F0',
		borderWidth: 2,
		width: '100%',
		textAlign: 'center',
		fontSize: 25,
		fontWeight: '600',
		paddingLeft: 18,
		backgroundColor: '#FAF7EA',
		marginVertical: 18,
	},
	textTwo: {
		letterSpacing: 2,
		color: '#3A3737',
		width: '100%',
		fontSize: 15,
		fontWeight: '400',
		paddingLeft: 125,
	},
	text: {
		letterSpacing: 2,
		borderColor: '#F0F0F0',
		borderWidth: 2,
		color: '#3A3737',
		width: '100%',
		marginVertical: 20,
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 18,
	},
	textHeader: {
		letterSpacing: 1.5,
		color: 'white',
		width: '100%',
		fontSize: 35,
		fontWeight: '800',
		textAlign: 'center',
		paddingVertical: 35,
		fontFamily: 'fantasy',
	},
	input: {
		letterSpacing: 4,
		marginLeft: 28,
		height: 40,
		width: '90%',
		borderColor: 'gray',
		borderWidth: 1,
		fontWeight: '100',
		backgroundColor: '#F6F6F6',
		paddingHorizontal: 25,
	},
});

export default function DataPersonal({ navigation, route }: any) {
	//const {firstName, lastName} = route.params    ////   ejemplo en el proyecto de omar "LoginScreen"
	const firstName: string = route.params['firstName'];
	const lastName: string = route.params['lastName'];
	const address: string = route.params['address'];
	const password: string = route.params['password'];

	return (
		<View style={styles.view}>
			<Header
				text={'MY INFORMATION'}
				simbol={'volver'}
				dirigir={() => {
					navigation.goBack();
				}}
			/>
			<View style={styles.viewThird}>
				<Text style={styles.textOne}>Personal Information</Text>

				<Text style={styles.text}>Name</Text>
				<Text style={styles.textTwo}>{firstName}</Text>
				<Text style={styles.text}>Last Name </Text>
				<Text style={styles.textTwo}>{lastName}</Text>
				<View style={styles.viewThird}>
					<Text style={styles.textOne}>Account info</Text>
					<Text style={styles.text}> Email</Text>
					<Text style={styles.textTwo}>{address}</Text>
					<Text style={styles.text}>Password</Text>
					<Text style={styles.textTwo}>{password}</Text>
				</View>
			</View>
		</View>
	);
}
