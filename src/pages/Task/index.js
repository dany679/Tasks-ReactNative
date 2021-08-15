import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import database from '../../config/firebase';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';
export default function Task({ navigation }) {
  const [task, setTask] = useState([]);

  const deleteTask = (taskId) => {
    database.collection('tasks').doc(taskId).delete();
  };

  useEffect(() => {
    database.collection('tasks').onSnapshot((query) => {
      let list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
      console.log(task, 'task');
      console.log(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Task}>
              <TouchableOpacity style={styles.deleteTask}></TouchableOpacity>
              <FontAwesome name='star' size={23} color='#ffffff' />
              <Text
                style={{ color: '#fff', paddingLeft: 12, width: '80%' }}
                onPress={() =>
                  navigation.navigate('Details', {
                    id: item.id,
                    description: item.description,
                  })
                }
              >
                {item.description}
                {console.log(task)}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate('NewTask')}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
