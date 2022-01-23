import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdeaScreen from './IdeaScreen';
import Idea from './Idea.js';
import Comment from './Comment.js';
import DataStore from './DataStore.js';
import OverviewScreen from './OverviewScreen';

const Stack = createNativeStackNavigator();

let idea = new Idea("ASP.NET web app");
let comment = new Comment("De naam wordt TCG Masters");
let comment2 = new Comment("Draait op een server van AWS Lightsail");
idea.addComment(comment);
idea.addComment(comment2);

let ideaStore = new DataStore();
ideaStore.addIdea(idea);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OverviewScreen"
          component={OverviewScreen}
          options={{title: "All my ideas"}}
        />
        <Stack.Screen 
          name="IdeaScreen"
          component={IdeaScreen}
          options={{title: "My idea"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;