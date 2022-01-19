import React from 'react';
import { View, Text } from 'react-native';
import Idea from './Idea.js';
import Comment from './Comment.js';

let idea = new Idea("ASP.NET web app");
let comment = new Comment("De naam wordt TCG Masters");
let comment2 = new Comment("Draait op een server van AWS Lightsail");
idea.addComment(comment);
idea.addComment(comment2);

const IdeaScreen = () => {
    return (
      <View>
        <Text>{idea.title}</Text>
          {idea.comments.map((comment, key) =>
            <Text>    {comment.content}</Text>
          )}
      </View>
    );
  }
  
  export default IdeaScreen;