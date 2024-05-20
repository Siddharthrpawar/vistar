import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const Todo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<any>([]);

  const handleInput = () => {
    // Alert.alert('Preseeded', input)Type;
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  const hnadleFlat = ({item}) => {
    return (
      <ScrollView style={{marginTop: 20, marginRight: 200}}>
        <Text>* {item}</Text>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', marginTop: 20}}>
      {/* <Text>App</Text> */}
      <TextInput
        value={input}
        onChangeText={txt => setInput(txt)}
        editable
        style={styles.textInput}
        placeholder="Type Here....."
      />
      <TouchableOpacity style={styles.btn} onPress={handleInput}>
        <Text style={{color: 'white'}}>Press Here...</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={hnadleFlat}
        keyExtractor={item => item.toString()}
        style={styles.flatList}
      />
      {/* 
        {todos.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 220,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    paddingLeft: 15,
    borderRadius: 10,
  },
  btn: {
    height: 40,
    width: 180,
    // borderColor: 'black',
    color: 'skyblue',
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 20,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    marginTop: 20,
  },
});

export default Todo;
