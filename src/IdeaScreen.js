import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Pressable, Alert } from 'react-native';
import AddButton from './AddButton';
import { DataContext } from '../App';

const IdeaScreen = ({ route }) => {
  const { idea } = route.params
  const { ideaList, setIdeaList } = useContext(DataContext);

  const AlertDeletion = (item) => {
    Alert.alert("Delete comment", "Do you want to delete the comment: \"" + item + "\"",
      [{
        text: 'Yes',
        onPress: () => {
          const indexIdea = ideaList.findIndex(i => i.title === idea.title)
          const indexComment = ideaList[indexIdea].comments.indexOf(item)
          ideaList[indexIdea].comments.splice(indexComment, 1)
          setIdeaList([...ideaList])
        }
      },
      {
        text: 'No'
      }])
  }

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <FlatList data={idea.comments} renderItem={({ item }) =>
          <Pressable style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#A9400F' : '#D45113'
            }, 
            styles.pressable
          ]} onLongPress={() => AlertDeletion(item)} delayLongPress={1000}>
            <Text style={styles.item}>{item}</Text>
          </Pressable>
        } />
      </View>
      <AddButton type="Comment" idea={idea} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54595f'
  },
  commentContainer: {
    flex: 0.85
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
    borderRadius: 10
  }
});


export default IdeaScreen;