import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { LogInScreen, SignUpScreen } from '../constants/routes';
import ButtonMain from '../button/ButtonMain';

const styles = StyleSheet.create({
	view: { height: '100%', textAlign: 'center', alignItems: 'center' },

	contuner: {
		backgroundColor: 'white',
		width: 330,
		height: 330,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	botonSignUP: {
		marginTop: 40,
		paddingHorizontal: 'auto',
		alignItems: 'center',
	},
	botonLogIn: {
		marginTop: 15,
		paddingHorizontal: 'auto',
		alignItems: 'center',
	},
	TextPrincipal: {
		color: 'white',
		fontSize: 62,
		fontWeight: '800',
		textAlign: 'justify',
		width: 230,
		height: 420,
		Align: 'center',
		paddingTop: 80,
		marginLeft: 18,
	},
	text: {
		fontSize: 13,
		fontWeight: '400',
		paddingLeft: 20,
		paddingTop: 2,
		marginTop: 10,
	},
});

export default function HomeScreen({ navigation }: any) {
	return (
		<SafeAreaView style={{ backgroundColor: '#0E172C' }}>
			<View style={styles.view}>
				<View style={{ height: 420, width: '100%' }}>
					<Text style={styles.TextPrincipal}>Let's Get Started</Text>
				</View>
				<View style={{ position: 'absolute', top: 30, left: 190 }}>
					<Image
						source={require('../img/ImgWelcome.png')}
						style={{ width: 320, height: 390 }}
					/>
				</View>
				<View style={styles.contuner}>
					<View style={styles.botonSignUP}>
						<ButtonMain
							text={'Sign Upssss'}
							route={() => navigation.navigate(SignUpScreen)}
						/>
					</View>
					<View style={styles.botonLogIn}>
						<Text style={styles.text}>Already have an account?</Text>
						<ButtonMain
							text={'Log In'}
							route={() => navigation.navigate(LogInScreen)}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
