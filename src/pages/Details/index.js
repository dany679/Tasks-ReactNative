import React from 'react';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../NewTask/style';
import { AntDesign } from '@expo/vector-icons';
import database from '../../config/firebase';

export default function Details({ navigation, route }) {
  const [description, setDescription] = useState(route.params.description);
  console.log(route.params, 'params');
  const id = route.params.id;
  const [click, setClick] = useState(false);
  const editTask = () => {
    if (description.trim() !== '') {
      setClick(true);
      database.collection('tasks').doc(id).update({
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
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity onPress={() => editTask()}>
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
