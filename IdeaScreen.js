import React from 'react';
import { View, Button, Text } from 'react-native';

const IdeaScreen = () => {
  return (
    <View>
      <Text>{ideaStore.getAllIdeas()[0].title}</Text>
          {ideaStore.getAllIdeas()[0].comments.map((comment, key) =>
            <Text>    {comment.content}</Text>
          )}
      <Button title='Add idea'
        onPress={() => ideaStore.addIdea(idea)}></Button>
      <Button title='Get all ideas'
        onPress={() => console.log(ideaStore.getAllIdeas())}></Button>
        <Button title='Clear ideas'
        onPress={() => console.log(ideaStore.clear())}></Button>
    </View>
  );
}

export default IdeaScreen;