import React, {useEffect , useState } from "react";
import { Alert ,StyleSheet,Text,View  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnimatedButton from '../components/AnimatedButton';

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
               <AnimatedButton action='higher' onPress={()=>setChoice('higher')}/>
               <AnimatedButton action='lower' onPress={()=>setChoice('lower')} />           
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