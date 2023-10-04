import React from "react"
import { View,Text,TextInput,StyleSheet} from "react-native"
import { useState } from "react"
import HeaderRegister from "../../button/HeaderRegister"
import Button from "../../button/Button"


export default function RegisterUserScreen({ navigation}:any){
    const[email,setEmail]=useState("")
    
    
    return(
       <View style={styles.view}>
           <HeaderRegister/>
        <View style={{paddingVertical:30}}>
           <Text style={styles.text}>EMAIL</Text>
           <TextInput style={styles.input}
                      placeholder="to complete..." placeholderTextColor="#0F0F0F"
                      onChangeText={setEmail}  value={email}  />
            <Text style={styles.textAlert} >{email.length===0?"campo requerido":null}</Text>
        </View>
        <View  style={styles.viewButton}>
            <Button bolean={false} dirigir={()=>navigation.goBack()} />
            <Button bolean={true}  dirigir={()=>navigation.navigate("RegisterPasswordScreen",{email})} 
                    condicion={ email.length>=3?false:true}/>
        </View>
       </View>
    )
}

const styles=StyleSheet.create({
    view:{height:"100%",textAlign:"center",alignItems:"center"},
    text:{letterSpacing:2,color:"#3A3737",width:"100%",marginVertical:20,fontSize:38,fontWeight:"700",paddingLeft:20},
    textAlert:{letterSpacing:2.2,color:"red",width:"100%",fontSize:11,fontWeight:"400",paddingLeft:30, paddingTop:5},
    input:{letterSpacing:4, marginLeft:20, height:50,width:370,borderColor: 'gray',borderWidth: 1,fontWeight:"100",backgroundColor:"#F6F6F6",paddingHorizontal:25},
    viewButton:{flexDirection:"row", marginVertical:50, justifyContent:"center"}
})