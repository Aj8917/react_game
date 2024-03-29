import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } 
 from '@react-navigation/native';
 import { createNativeStackNavigator } 
 from '@react-navigation/native-stack';

 import Game from './screens/Game';
import Home from './screens/Home';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
          <NavigationContainer>
              <StatusBar style='auto'/>
                <Stack.Navigator initialRouteName='Home'>
                  <Stack.Screen name='Home' component={Home} />
                  <Stack.Screen name='Game' component={Game}/>
                </Stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
