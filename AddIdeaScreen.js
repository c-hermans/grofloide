import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { DataContext } from './App';
import Idea from './Idea';

const AddIdeaScreen = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState("");
    const {ideaList, setIdeaList, storeData} = useContext(DataContext);

    const AddIdea = () => {
        setIdeaList([...ideaList, new Idea(value, [])]);
        navigation.navigate("OverviewScreen");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Enter 1 to 5 words as your new idea</Text>
            <TextInput style={styles.input} placeholder="My new idea" value={value} onChangeText={newValue => setValue(newValue)}></TextInput>
            <Pressable style={styles.addButton} onPress={() => AddIdea()}>
                <Text style={styles.addButtonText}>Add new idea</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#54595f',
        alignItems: "center",
    },
    titleText: {
        color: "#F4F4F9",
        marginTop: 50
    },
    input: {
        backgroundColor: "#F4F4F9",
        color: "#282C34",
        width: 200,
        alignContent: "center",
        marginTop: 50,
        textAlign: "center"
    },
    addButton: {
        marginTop: 50,
        height: 35,
        backgroundColor: '#9FD356',
        justifyContent: "center",
        padding: 8
    },
    addButtonText: {
        color: "#282C34"
    }
});

export default AddIdeaScreen;