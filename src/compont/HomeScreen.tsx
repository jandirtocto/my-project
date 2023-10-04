import React from "react";
import { StyleSheet, Text,Pressable,TextInput,View} from "react-native";

const styles=StyleSheet.create({
    view:{height:"100%",textAlign:"center",alignItems:"center"},
    input:{letterSpacing:4, marginVertical:10,textAlign:"center",height:40,width:250,borderColor: 'gray',borderWidth: 1,fontWeight:"100"},
    text:{letterSpacing:5,textAlign:"center",width:"100%",fontSize:40,fontWeight:"600",},
    boton:{borderRadius:0.5,borderWidth:1.5,borderColor:"#A4A3A3", marginVertical:40,backgroundColor:"black",width:200,height:40,marginHorizontal:"auto"},
    botonText:{textAlign:"center",color:"white",letterSpacing:2,justifyContent:"center",marginHorizontal:"auto",fontSize:18,fontWeight:"300"}
})

export default function HomeScreen ({ navigation }:any){
    return(
        <View style={styles.view}>
           <View style={{height:350,paddingTop:200}}>
           <Text style={styles.text}>WELCOME!</Text>
           </View>
            <Pressable style={styles.boton} onPress={() => navigation.navigate("RegisterUserScreenn") }>
                <Text style={styles.botonText} >REGISTER</Text>
            </Pressable>
            <Pressable style={styles.boton}  >
                <Text style={styles.botonText} >SIGN IN</Text>
            </Pressable>
        </View>
    )
}