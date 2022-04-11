import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { DataContext } from './App';
import Idea from './Idea';

const AddIdeaScreen = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState("");
    const {ideaList, setIdeaList, storeData} = useContext(DataContext);

    const AddIdea = () => {
        let countWords = value.match(/\S+/g) || [];
        console.log(countWords.length);
        if (countWords.length > 0 && countWords.length < 6) {
            setIdeaList([...ideaList, new Idea(value, [])]);
            navigation.navigate("OverviewScreen");
        } else {
            Alert.alert("Wrong input", "Your idea contains " + countWords.length + " words. Try formulating it in 1 to 5 words.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Enter 1 to 5 words for describing your new idea</Text>
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
        justifyContent: "center",
        marginTop: -40
    },
    titleText: {
        flexWrap: 'wrap',
        textAlign: "center",
        width: 300,
        fontSize: 20,
        color: "#F4F4F9",
    },
    input: {
        backgroundColor: "#F4F4F9",
        color: "#282C34",
        width: 200,
        alignContent: "center",
        textAlign: "center",
        marginTop: 50,
        borderRadius: 10
    },
    addButton: {
        height: 35,
        backgroundColor: '#9FD356',
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        marginTop: 20,
        width: 200,
        borderRadius: 10
    },
    addButtonText: {
        color: "#282C34"
    }
});

export default AddIdeaScreen;