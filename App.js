import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdeaScreen from './IdeaScreen';
import Idea from './Idea.js';
import Comment from './Comment.js';
import DataStore from './DataStore.js';
import OverviewScreen from './OverviewScreen';
import AddIdeaScreen from './AddIdeaScreen';

const Stack = createNativeStackNavigator();

let idea = new Idea("ASP.NET web app");
let idea2 = new Idea("Flutter mobile app");
let comment = new Comment("De naam wordt TCG Masters");
let comment2 = new Comment("Draait op een server van AWS Lightsail");
let comment3 = new Comment("Een app voor het bijhouden van alle maandelijkse kosten");
idea.addComment(comment);
idea.addComment(comment2);
idea2.addComment(comment3);

let ideaStore = new DataStore();
ideaStore.addIdea(idea);
ideaStore.addIdea(idea2);

export const DataContext = createContext();

const App = () => {
  const [data, setData] = useState(ideaStore);

  return (
    <DataContext.Provider value={{ data, setData }}>
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
            component={OverviewScreen}
            options={{ title: "All my ideas" }}>
          </Stack.Screen>
          <Stack.Screen
            name="IdeaScreen"
            component={IdeaScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="AddIdeaScreen"
            component={AddIdeaScreen}
            options={{ title: "New idea" }}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}

export default App;