import React, { createContext, useEffect, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdeaScreen from './src/IdeaScreen';
import OverviewScreen from './src/OverviewScreen';
import AddIdeaScreen from './src/AddIdeaScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddCommentScreen from './src/AddCommentScreen';

const Stack = createNativeStackNavigator();

export const DataContext = createContext();

const App = () => {
  const [ideaList, setIdeaList] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('ideas')
      if (value !== null) {
        setIdeaList(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('ideas', jsonValue)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    storeData(ideaList)
  }, [ideaList])

  return (
    <DataContext.Provider value={{ ideaList, setIdeaList, storeData }}>
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
          <Stack.Screen
            name="AddCommentScreen"
            component={AddCommentScreen}
            options={{ title: "New comment" }}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}

export default App;