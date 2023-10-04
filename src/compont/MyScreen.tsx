import React from "react";
import { View,Text,Pressable} from "react-native";
import Encabezado from "../button/Encabezado";




export default function MyScreen ({navigation,route}:any){
    const firstName: string = route.params['firstName']
    const lastName: string = route.params['lastName']
    const phone:string = route.params['phone']
    const email: string=route.params['email']
    const password: string=route.params ['password']
    
    return(
        <View>
          <Encabezado dirigir={()=>navigation.navigate("RegisterScreen",{firstName,lastName,phone,email,password})} text={"WELCOME!"} simbol={"INFO"}/>
           <Text style={{textAlign:"center",paddingTop:100,fontSize:40,fontWeight:"100"}}>no se que poner aqui :v</Text>
        </View>
    )
}
//viewButton:{flexDirection:"row", marginVertical:50, justifyContent:"center"}
//onPress={()=>navigation.navigate("RegisterScreen",{firstName,lastName,phone,email,password})}