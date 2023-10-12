import React from 'react';
import { StyleSheet, Text, Pressable,Image ,TextInput, View ,SafeAreaView, StatusBar} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { LogInScreen, ScreenRegisterUser } from '../constants/routes';




const styles = StyleSheet.create({
	view: { height: '100%', textAlign: 'center', alignItems: 'center' },
	
	contuner: {
		backgroundColor:"white",width:330,height:330,borderTopLeftRadius:30,borderTopRightRadius:30,borderBottomLeftRadius:10,borderBottomRightRadius:10
	},
	botonSignUP: {
		backgroundColor:"#FA8501",marginTop:60,width:300,height:60,justifyContent:"center",marginHorizontal:17,borderRadius:5},
    botonLogIn:{
		backgroundColor:"#FA8501",marginTop:5,width:300,height:60,justifyContent:"center",marginHorizontal:17,borderRadius:5
	},
	TextPrincipal:{color:"white",fontSize:62,fontWeight:"800",textAlign:"justify",width:230,height:420, textAlign:"center", paddingTop:80
	},
	text:{fontSize:13,fontWeight:"400",paddingLeft:20},
	textButton:{color:"white",fontSize:28,fontWeight:"600",textAlign:"center"}
});

export default function HomeScreen({ navigation }: any) {
	return (
		<SafeAreaView style={{backgroundColor:'#0E172C'}}>
		  <View style={styles.view}>
		    <View style={{height:420,width:"100%" }}>
			<Text  style={styles.TextPrincipal} >Let's Get     Started</Text>
			</View>
			<View
			style={{position:"absolute",top:30,left:190} }>
			<Image source={require("../img/ImgWelcome.png")}
			style={{width:320,height:390}}
			/>
			</View >
			<View style={styles.contuner}>
			<Pressable
				style={styles.botonSignUP}
				onPress={() => navigation.navigate(ScreenRegisterUser)}

				>
				<Text
				style={styles.textButton} >Sign Up</Text>
			</Pressable>
			<View style={{marginTop:40,height:90}}>
			<Text 
			style={styles.text}>Already have an account?</Text>
			<Pressable 
			style={styles.botonLogIn}
			onPress={() => navigation.navigate(LogInScreen)}

			>
				<Text  style={styles.textButton} >  Log In</Text>
			</Pressable>

			</View>
			
			</View>
		
		</View>
		</SafeAreaView>
	);
}
