import React from 'react';
import { View, Button, Text } from 'react-native';

import Idea from './Idea.js';
import Comment from './Comment.js';
import DataStore from './DataStore.js';

let idea = new Idea("ASP.NET web app");
let comment = new Comment("De naam wordt TCG Masters");
let comment2 = new Comment("Draait op een server van AWS Lightsail");
idea.addComment(comment);
idea.addComment(comment2);

let ideaStore = new DataStore();

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