import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Button, 
  StyleSheet,
  Keyboard 
} from 'react-native';

export default function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task.trim());
      setTask('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa..."
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddTask}
      />
      <Button 
        title="Adicionar" 
        onPress={handleAddTask} 
        color="#5E8B7E"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: 'white',
  },
});