import React from 'react';
import { StyleSheet, Text, Pressable, TextInput, View } from 'react-native';
import { ScreenRegisterUser } from '../constants/routes';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
	view: { height: '100%', textAlign: 'center', alignItems: 'center' },
	input: {
		letterSpacing: 4,
		marginVertical: 10,
		textAlign: 'center',
		height: 40,
		width: 250,
		borderColor: 'gray',
		borderWidth: 1,
		fontWeight: '100',
	},
	text: {
		letterSpacing: 5,
		textAlign: 'center',
		width: '100%',
		fontSize: 40,
		fontWeight: '600',
	},
	boton: {
		borderRadius: 0.5,
		borderWidth: 1.5,
		borderColor: '#A4A3A3',
		marginVertical: 40,
		backgroundColor: 'black',
		width: 200,
		height: 40,
		marginHorizontal: 'auto',
	},
	botonText: {
		textAlign: 'center',
		color: 'white',
		letterSpacing: 2,
		justifyContent: 'center',
		marginHorizontal: 'auto',
		fontSize: 18,
		fontWeight: '300',
	},
});

export default function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.view}>
			<Drawer.Navigator>
				<Drawer.Screen name='Feed' component={Feed} />
				<Drawer.Screen name='Feed2' component={Feed} />
				<Drawer.Screen name='Feed3' component={Feed} />
				<Drawer.Screen name='Feed4' component={Feed} />
				<Drawer.Screen name='Feed5' component={Feed} />
			</Drawer.Navigator>

			<View style={{ height: 350, paddingTop: 200 }}>
				<Text style={styles.text}>WELCOME!</Text>
			</View>
			<Pressable
				style={styles.boton}
				onPress={() => navigation.navigate(ScreenRegisterUser)}>
				<Text style={styles.botonText}>REGISTER</Text>
			</Pressable>
			<Pressable style={styles.boton}>
				<Text style={styles.botonText}>SIGN IN</Text>
			</Pressable>
		</View>
	);
}

function Feed() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Feed Screen</Text>
		</View>
	);
}
