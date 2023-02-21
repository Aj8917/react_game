import React, {useEffect , useState } from "react";
import { Alert ,StyleSheet,Text,View, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Game(){
    
    const baseNumber= Math.floor(Math.random()*100);
    const score =Math.floor(Math.random()*100);
    const [choice,setChoice] =useState('');

    const navigation=useNavigation();

    useEffect (()=>{
          if(choice)
          {
            const winner =(choice === 'higher' && score > baseNumber)||
            (choice==='lower' && baseNumber > score);

            Alert.alert(`You've ${winner ? 'won' : 'lost'}`,
                        `You Scored : ${score}`);
                navigation.goBack();
          }
    },[baseNumber,score,choice]);


    return (
         <View style={StyleSheet.container}>
              <Text style={styles.baseNumber}>Starting : {baseNumber} </Text>

            <TouchableHighlight onPress={()=> setChoice('higher')} 
            style={[styles.button , styles.buttonGreen]}>
            <Text style={styles.buttonText} >Higher</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>setChoice('lower')}
            style={[styles.button , styles.buttonRed]}>
            <Text style={styles.buttonText}>Lower</Text>
            </TouchableHighlight>
         </View>
    );
}//Game

const styles =StyleSheet.create({
    container:{
                flex:1,
                backgroundColor:'#808080',
                alignItems:'center',
                justifyContent:'center',
    },baseNumber: {
                    fontSize: 48,
                    marginBottom: 30, alignItems: 'center',
         },
         button: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    borderRadius: 15,
                    padding: 30,
                    marginVertical: 15,
        },
        buttonText: {
            color: 'white',
            fontSize: 24,
            
        },
        buttonRed: {
             backgroundColor: 'red',
             },
        buttonGreen: {
             backgroundColor: 'green',
             }


})