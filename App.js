// import {View, Text} from 'react-native';
// import React from 'react';
// import Todo from './Demo/Todo';

// const App = () => {
//   return (
//     <View>
//       <Todo />
//     </View>
//   );
// };

// export default App;

import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, SafeAreaView} from 'react-native';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [data, setData] = useState(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to create a new post
  const createPost = async () => {
    try {
      const response = await axios.post(API_URL, {
        title: 'New Post',
        body: 'This is a new post created with Axios in React Native',
        userId: 1,
      });
      console.log('New post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Function to update a post
  const updatePost = async () => {
    try {
      const response = await axios.put(`${API_URL}/${postId}`, {
        title: 'Updated Post',
        body: 'This post has been updated using Axios in React Native',
      });
      console.log('Post updated:', response.data);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  // Function to delete a post
  const deletePost = async () => {
    try {
      const response = await axios.delete(`${API_URL}/${postId}`);
      console.log('Post deleted:', response.data);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Data from API:</Text>
        <Text>{JSON.stringify(data, null, 2)}</Text>
        <Button title="Create Post" onPress={createPost} />
        <Button title="Update Post" onPress={() => updatePost(1)} />
        <Button title="Delete Post" onPress={() => deletePost(1)} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
