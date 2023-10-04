 import React from"react";
 import { View ,Text,StyleSheet} from "react-native";

 export default function HeaderRegister(){
    return(
        <View style={styles.view}>
        <Text style={styles.text}>REGISTER</Text>
        </View>
    )
 }
 const styles=StyleSheet.create({
    view:{backgroundColor:"#C70039",width:"100%",height:200},
    text:{fontSize:49,letterSpacing:3,textAlign:"center",paddingVertical:50,fontWeight:"800",color:"white",fontFamily:"serif",textDecorationLine:"underline"},
})
