import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';

const styles = StyleSheet.create({
	botonText: {
		textAlign: 'center',
		color: 'white',
		letterSpacing: 2.5,
		fontSize: 20,
		fontWeight: '600',
		marginVertical: 10,
	},
	botonSave: {
		borderRadius: 3,
		borderWidth: 2,
		borderColor: '#E0A705',
		backgroundColor: 'orange',
		width: 150,
		height: 50,
		display: 'flex',
		marginHorizontal: 5,
	},
	botonCancel: {
		borderRadius: 3,
		borderWidth: 2.5,
		borderColor: '#EB0B07',
		backgroundColor: 'red',
		width: 150,
		height: 50,
		display: 'flex',
		marginHorizontal: 5,
	},
});

export default function Button({ bolean, dirigir, condicion }: any) {
	return (
		<View>
			<Pressable
				style={bolean == true ? styles.botonSave : styles.botonCancel}
				onPress={dirigir}
				disabled={condicion}>
				<Text style={styles.botonText}>
					{' '}
					{bolean == true ? 'SAVE' : 'CANCEL'}{' '}
				</Text>
			</Pressable>
		</View>
	);
}
