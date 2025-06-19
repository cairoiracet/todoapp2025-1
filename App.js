import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { 
      id: Date.now().toString(), 
      text: taskText, 
      completed: false 
    }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggleComplete={toggleComplete} 
        onDeleteTask={deleteTask} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});