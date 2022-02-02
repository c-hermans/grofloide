import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const IdeaScreen = ({ route }) => {
  const { idea } = route.params
  return (
    <View style={styles.container}>
      <FlatList data={idea.comments} renderItem={({ item }) =>
        <View style={styles.pressable}>
          <Text style={styles.item}>{item.content}</Text>
        </View>
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54595f'
  },
  item: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#F4F4F9"
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#D45113',
    borderRadius: 10
  }
});


export default IdeaScreen;