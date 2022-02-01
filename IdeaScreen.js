import React from 'react';
import { View, FlatList, Text } from 'react-native';

const IdeaScreen = ({route}) => {
  const {idea} = route.params
  return (
    <View>
      <FlatList data={idea.comments} renderItem={({ item }) =>
                    <Text>{item.content}</Text>
            } />
    </View>
  );
}


export default IdeaScreen;