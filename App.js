import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen
          name='Tasks'
          component={Task}
          options={{
            headerTintColor: '#f96e6a',
          }}
        />
        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{
            headerTintColor: '#f96e6a',
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerTintColor: '#f96e6a',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({});
