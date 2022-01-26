import React from 'react';
import { View, Button, Text } from 'react-native';

const IdeaScreen = ({route}) => {
  const {title} = route.params
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default IdeaScreen;