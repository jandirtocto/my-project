import React from "react";
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import{Text,StyleSheet} from "react-native"
import Mañana from "../prueba/Mañana";
import Tarde from "../prueba/Tarde";
import MyScreen from "./MyScreen";
import ButtonItem from "../button/ButtonItem";



const Drawer = createDrawerNavigator();
export default function DrawerIndex ({navigation,route}:any){
    const MenuItems =()=>{
    
        const firstName: string = route.params['firstName'];
        const lastName: string = route.params['lastName'];
        const phone: string = route.params['phone'];
        const email: string = route.params['email'];
        const password: string = route.params['password'];
    
        return(
            <DrawerContentScrollView >
                <Text style={styles.Header} >
                GMAIL
                </Text>
                <ButtonItem  
                text="Mañana"
                onPress={()=>navigation.navigate('Mañana')}
                 />
                 <ButtonItem  
                text="Tarde"
                onPress={()=>navigation.navigate('Tarde')}
                 />
                 <ButtonItem  
                text="MyScreen"
                onPress={()=>navigation.navigate('MyScreen',{
                    firstName,
                    email,
                    password,
                    lastName,
                    phone,
                })}
                 />
                 <ButtonItem 
                 text="promotions"/>
                 <ButtonItem
                 text="updates"/>
                 <Text style={styles.text} >All labels</Text>
                 <ButtonItem
                 text="starred"/>
                 <ButtonItem
                 text="important"/>
                 <ButtonItem
                 text="sent"/>
            </DrawerContentScrollView>
        )
    }


    
    return(
      
         <Drawer.Navigator drawerContent={() => < MenuItems />} >
            <Drawer.Screen name="MyScreen" component={MyScreen}/>
            <Drawer.Screen name="Mañana" component={Mañana}/>
            <Drawer.Screen name="Tarde" component={Tarde}/>
           </Drawer.Navigator>

    )
}
const styles = StyleSheet.create({
    Header:{backgroundColor:"black",textAlign:"center",fontSize:23,fontWeight:"300",letterSpacing:2,color:"white",marginTop:-5, height:50,paddingTop:10},
    text:{fontSize:17,paddingLeft:20,fontWeight:'700',color:"#797777" }
  
})


