import React, { useState } from "react"
import {View,Text,TextInput,Image,Pressable,SafeAreaView,StyleSheet}from "react-native"
import ButtonMain from "../button/ButtonMain"
import { ScreenDrawerIndex, ScreenMy } from "../constants/routes"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";


export default function ScreenSignUp({navigation}:any){
  
    const [firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[address,setAddress]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const handleSubmit=async()=>{
        if(address&&password){
            try{
                await createUserWithEmailAndPassword(auth,address,password)
            }catch(err){
                console.log('got error:', err);
            }
        }
    }
    return(
        <SafeAreaView 
        style={{backgroundColor:'#0E172C',flex:1}}>
            <View style={{ height: 230}}>
                <Pressable style={{backgroundColor:"black",width:60,height:40,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginLeft:10,marginTop:10}}>
               <Text style={{fontSize:25,fontWeight:'800',textAlign:'center',color:'white'}}
               onPress={()=>navigation.goBack()} >{"<-"}</Text>
                </Pressable>
                <View>
                <Image  source={require("../img/ImgSignUp.png")}
                 style={{justifyContent:"center",position:"relative",top:-8,left:120,height:180}}/>
                </View>
			
            </View>
            <View style={style.counterSecondary}>
                <Text style={style.text}>Frist Name</Text>
                <TextInput
                placeholder="jandir"
                style={style.texInput}
                onChangeText={setFirstName}
                value={firstName}/>
                <Text
                style={style.text}>Last Name</Text>
                <TextInput
                placeholder="tocto huacchillo "
                style={style.texInput}
                onChangeText={setLastName}
                value={lastName}/>
                  <Text style={style.text}>Email Address</Text>
                <TextInput
                placeholder="jtoctoh@unprg.edu,pe"
                style={style.texInput}
                onChangeText={setAddress}
                value={address}/>
                <Text
                style={style.text}>Password</Text>
                <TextInput
                placeholder="burbase"
                style={style.texInput}
                onChangeText={setPassword}
                value={password}/>
                <Text
                style={style.text}>Confirm Password</Text>
                <TextInput
                placeholder="burbase"
                style={style.texInput}
                onChangeText={setConfirmPassword}
                value={confirmPassword}/>
                <View 
                style={style.counterButton}>
                    <ButtonMain 
                    text='Log In'
                    route ={()=>navigation.navigate(handleSubmit,{firstName,lastName,address,password})}
                    />
                </View>

            </View>
        </SafeAreaView>


    )
}
const style=StyleSheet.create({
    counterButton:{
        paddingHorizontal:"auto",alignItems:"center"
    },
    texInput:{
        marginTop:20,fontSize:18, fontWeight:"400", marginLeft:40
    },
    text:{marginTop:25,fontSize:18, fontWeight:"500", marginLeft:40},
    counterSecondary:{backgroundColor:"white",height:"100%",borderTopLeftRadius:50,borderTopRightRadius:50}
})