import React from "react";
import { StyleSheet,Text,View } from "react-native";


export default function Game(){
    return (
         <View style={StyleSheet.container}>
              <Text>Game Screen</Text>
         </View>
    );
}

const styles =StyleSheet.create({
    container:{
                flex:1,
                backgroundColor:'#hhh',
                alignItems:'center',
                justifyContent:'center',
    },
})