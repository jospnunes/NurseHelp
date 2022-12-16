import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Register2 from './src/screens/Register2/Register2';
import Home from './src/screens/Home/Home';
import Curative from './src/screens/Curative/Curative';

const Stack = createNativeStackNavigator()

export default function APP(){
  return(
  <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title:'Register'}}
      />
      <Stack.Screen
        name='Register2'
        component={Register2}
        options={{title:'Register2'}}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{title:'Home'}}
      />
      <Stack.Screen
        name='Curative'
        component={Curative}
        options={{title:'Curative'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

