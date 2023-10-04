import React from "react"
import { View,Text,TextInput,StyleSheet} from "react-native"
import { useState } from "react"
import HeaderRegister from "../../button/HeaderRegister"
import Button from "../../button/Button"


export default function RegisterConfirmPasswordScreen({ navigation,route}:any){
    const[confirmPassword,setConfirmPassword]=useState("")
    const email: string=route.params['email']
    const password:string=route.params['password']


    return(
       <View style={styles.view}>
           <HeaderRegister/>
        <View style={{paddingVertical:30}}>
        <Text style= {styles.text}>CONFIRM PASSWORD</Text>
        <TextInput style={styles.input}
        placeholder="to complete..." placeholderTextColor="#0F0F0F"
        onChangeText={setConfirmPassword}  value={confirmPassword} />
        <Text style={styles.textAlert} >{confirmPassword.length===0?"campo requerido":null}</Text> 
        </View>
        <View  style={styles.viewButton}>
            <Button bolean={false} dirigir={()=>navigation.goBack()} />
            <Button bolean={true}  dirigir={()=>navigation.navigate("RegisterFirstNameScreen",{email,password,confirmPassword})}
                     condicion={password===confirmPassword?false:true}/>
        </View>
       </View>
    )
}
//{password==confirmPassword?"":"contraseña incorrecta"}//
const styles=StyleSheet.create({
    view:{height:"100%",textAlign:"center",alignItems:"center"},
    text:{letterSpacing:2,color:"#3A3737",width:"100%",marginVertical:20,fontSize:28,fontWeight:"700",paddingLeft:20},
    textAlert:{letterSpacing:2.2,color:"red",width:"100%",fontSize:11,fontWeight:"400",paddingLeft:30, paddingTop:5},
    input:{letterSpacing:4, marginLeft:20, height:50,width:370,borderColor: 'gray',borderWidth: 1,fontWeight:"100",backgroundColor:"#F6F6F6",paddingHorizontal:25},
    viewButton:{flexDirection:"row", marginVertical:50, justifyContent:"center"}
})