import React from 'react';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';
import database from '../../config/firebase';

export default function NewTask({ navigation }) {
  const [description, setDescription] = useState('');
  const [click, setClick] = useState(false);
  const addTask = () => {
    if (description.trim() !== '') {
      setClick(true);
      database.collection('tasks').add({
        description,
        status: false,
      });
      setDescription(''),
        setTimeout(() => {
          navigation.navigate('Tasks');
        }, 500);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}> Description: </Text>
      <View style={styles.View}>
        <TextInput
          underlineColorAndroid='transparent'
          style={styles.TextInput}
          placeholder='Add Task'
          text={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
        ></TextInput>
        <TouchableOpacity onPress={() => addTask()}>
          <AntDesign
            name={click === false ? 'checkcircleo' : 'checkcircle'}
            size={24}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
