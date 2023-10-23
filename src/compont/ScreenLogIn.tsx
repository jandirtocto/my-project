import React from "react"
import {View,Text,TextInput,Image,Pressable,SafeAreaView,StyleSheet}from "react-native"
import ButtonMain from "../button/ButtonMain"



export default function ScreenLogIn({navigation}:any){
    return(
        <SafeAreaView 
        style={{backgroundColor:'#0E172C',flex:1}}>
            <View style={{ height: 300}}>
                <Pressable style={{backgroundColor:"black",width:60,height:40,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginLeft:10,marginTop:10}}>
               <Text style={{fontSize:25,fontWeight:'800',textAlign:'center',color:'white'}}
               onPress={()=>navigation.goBack()} >{"<-"}</Text>
                </Pressable>
                <View>
                <Image  source={require("../img/ImgSignUp.png")}
                 style={{justifyContent:"center",position:"relative",top:5,left:120}}/>
                </View>
			
            </View>
            <View style={{backgroundColor:"white",height:"100%",borderTopLeftRadius:70,borderTopRightRadius:70}}>
                <Text style={{marginTop:80,fontSize:18, fontWeight:"500", marginLeft:40}}>Email Address</Text>
                <TextInput
                placeholder="jtoctoh@unprg.edu,pe"
                style={{marginTop:20,fontSize:18, fontWeight:"400", marginLeft:40}}/>
                <Text
                style={{marginTop:30,fontSize:18, fontWeight:"500", marginLeft:40}}>Password</Text>
                <TextInput
                placeholder="burbase"
                style={{marginTop:20,fontSize:18, fontWeight:"400", marginLeft:40}}/>

                <View 
                style={style.counterButton}>
                    <ButtonMain 
                    text='Log In'
                
                    />
                </View>
            </View>
        </SafeAreaView>


    )
}

const style=StyleSheet.create({
    counterButton:{
        marginTop: 40,paddingHorizontal:"auto",alignItems:"center"
    }
})