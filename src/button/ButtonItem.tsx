import React from "react";
 import  {Text,TouchableOpacity,StyleSheet,View} from "react-native"

 export default function ButtonItem ({text,onPress}:any){
    return(
        <TouchableOpacity  onPress={onPress} style={styles.Button}>
           <View style={{height:50,display:"flex",alignItems:"center"}}>
           <Text style={styles.Text}>{text}</Text>
           </View>
        </TouchableOpacity>
    )
 }
 const styles = StyleSheet.create({
    Button:{backgroundColor:"white",height:50,borderRadius: 3,
    borderWidth: 1,
    borderColor: '#F5F2F2'},
    Text:{lineHeight:50,fontSize:16,fontWeight:"400"}
})