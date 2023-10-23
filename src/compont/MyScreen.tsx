import React from 'react';
import { View, Text } from 'react-native';
import Header from '../button/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { ScreenDataPersonal } from '../constants/routes';


export default function MyScreen({navigation,route}:NativeStackScreenProps<ParamListBase>) {
	interface ParamsList {
		address: string;
		password: string;
		firstName: string;
		lastName: string;
	}
	const initialParams:ParamsList={
		    address: '',
			password: '',
			firstName: '',
			lastName: '',
	}

		const params = (route.params ?? initialParams) as ParamsList;
	
		const address = params['address'];
		const password = params['password'];
		const firstName = params['firstName'];
		const lastName = params['lastName'];
	
	return (
		<View>
    

			<Header
				dirigir={() =>
					navigation.navigate(ScreenDataPersonal, {
						firstName,
						lastName,
						address,
						password,
					})
				}
				text={'WELCOME!'}
				simbol={'INFO'}
			/>
			<Text
				style={{
					textAlign: 'center',
					paddingTop: 100,
					fontSize: 40,
					fontWeight: '100',
				}}>
				no se que poner aqui :v
			</Text>
		</View>
	);
}
//viewButton:{flexDirection:"row", marginVertical:50, justifyContent:"center"}
//onPress={()=>navigation.navigate("RegisterScreen",{firstName,lastName,phone,email,password})}
