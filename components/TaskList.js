import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => onToggleComplete(item.id)}>
        <Ionicons 
          name={item.completed ? 'checkbox' : 'square-outline'} 
          size={24} 
          color={item.completed ? '#4CAF50' : '#555'} 
        />
      </TouchableOpacity>
      
      <Text style={[styles.taskText, item.completed && styles.completedText]}>
        {item.text}
      </Text>
      
      <TouchableOpacity onPress={() => onDeleteTask(item.id)}>
        <Ionicons name="trash-outline" size={24} color="#f44336" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListEmptyComponent={
        <Text style={styles.emptyMessage}>Nenhuma tarefa adicionada ainda!</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});