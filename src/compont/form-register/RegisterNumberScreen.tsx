import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import HeaderRegister from '../../button/HeaderRegister';
import Button from '../../button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { ScreenDrawerIndex } from '../../constants/routes';

interface ParamsList {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
}

export default function RegisterNumberScreen({
	navigation,
	route,
}: NativeStackScreenProps<ParamListBase>) {
	const initialParams: ParamsList = {
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
	};
	const params = (route.params ?? initialParams) as ParamsList;

	const [phone, setPhone] = useState('');
	const phoneNew = phone.split('');
	const email = params['email'];
	const password = params['password'];
	const confirmPassword = params['confirmPassword'];
	const firstName = params['firstName'];
	const lastName = params['lastName'];

	return (
		<View style={styles.view}>
			<HeaderRegister />
			<View style={{ paddingVertical: 30 }}>
				<Text style={styles.text}>Phone Number </Text>
				<TextInput
					style={styles.input}
					placeholder='to complete...'
					placeholderTextColor='#0F0F0F'
					onChangeText={setPhone}
					value={phone}
					maxLength={9}
				/>
				<Text style={styles.textAlert}>
					{phone.length === 0 ? 'campo requerido' : null}{' '}
					{phoneNew[0] == '9' ? '' : 'Numero invalido'}
				</Text>
			</View>
			<View style={styles.viewButton}>
				<Button bolean={false} dirigir={() => navigation.goBack()} />
				<Button
					bolean={true}
					dirigir={() =>
						navigation.navigate(ScreenDrawerIndex, {
							email,
							password,
							confirmPassword,
							firstName,
							lastName,
							phone,
						})
					}
					//condicion={phoneNew[0] == '9' && phone.length === 9 ? false : true}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	view: { height: '100%', textAlign: 'center', alignItems: 'center' },
	text: {
		letterSpacing: 2,
		color: '#3A3737',
		width: '100%',
		marginVertical: 20,
		fontSize: 38,
		fontWeight: '700',
		paddingLeft: 20,
	},
	textAlert: {
		letterSpacing: 2.2,
		color: 'red',
		width: '100%',
		fontSize: 11,
		fontWeight: '400',
		paddingLeft: 30,
		paddingTop: 5,
	},
	input: {
		letterSpacing: 4,
		marginLeft: 20,
		height: 50,
		width: 370,
		borderColor: 'gray',
		borderWidth: 1,
		fontWeight: '100',
		backgroundColor: '#F6F6F6',
		paddingHorizontal: 25,
	},
	viewButton: {
		flexDirection: 'row',
		marginVertical: 50,
		justifyContent: 'center',
	},
});
