import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AddButton from './AddButton.js';
import { DataContext } from '../App.js';

const OverviewScreen = ({ navigation }) => {
    const { ideaList, setIdeaList } = useContext(DataContext);

    const AlertDeletion = (item) => {
        Alert.alert("Delete comment", "Do you want to delete the idea: \"" + item.title + "\"",
            [{
                text: 'Yes',
                onPress: () => {
                    const indexIdea = ideaList.findIndex(i => i.title === item.title)
                    ideaList.splice(indexIdea, 1)
                    setIdeaList([...ideaList])
                }
            },
            {
                text: 'No'
            }])
    }

    return (
        <View style={styles.container}>
            <View style={styles.ideaContainer}>
                <FlatList data={ideaList} renderItem={({ item }) =>
                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#86C332' : '#9FD356'
                        },
                        styles.pressable
                    ]} onPress={() => navigation.navigate('IdeaScreen', { idea: item, name: item.title })}
                        onLongPress={() => AlertDeletion(item)} delayLongPress={1000}>
                        <Text style={styles.item}>{item.title}</Text>
                    </Pressable>
                } />
            </View>
            <Text></Text>
            <AddButton type="Idea" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#54595f'
    },
    ideaContainer: {
        flex: 0.85,
    },
    item: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#282C34"
    },
    pressable: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 18,
        height: 55,
        borderRadius: 10
    }
});

export default OverviewScreen;