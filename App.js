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
let idea2 = new Idea("Spring boot app");
let comment = new Comment("De naam wordt TCG Masters");
let comment2 = new Comment("Draait op een server van AWS Lightsail");
idea.addComment(comment);
idea.addComment(comment2);

let ideaStore = new DataStore();
ideaStore.addIdea(idea);
ideaStore.addIdea(idea2);


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#282C34',
          },
          headerTintColor: '#F4F4F9',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name="OverviewScreen"
          options={{ title: "All my ideas" }}>
          {(props) => <OverviewScreen {...props} data={ideaStore} />}
        </Stack.Screen>
        <Stack.Screen
          name="IdeaScreen"
          component={IdeaScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;