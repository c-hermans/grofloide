import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from "react-native"
import { DataContext } from './App';

const AddCommentScreen = ({route}) => {
    const {idea} = route.params;
    const navigation = useNavigation();
    const [value, setValue] = useState("");
    const {ideaList, setIdeaList} = useContext(DataContext);

    const AddComment = () => {
        const objIndex = ideaList.findIndex(obj => obj.title === idea.title)
        ideaList[objIndex].comments.push(value);
        setIdeaList([...ideaList])
        navigation.navigate('IdeaScreen', { idea: idea, name: idea.title })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Enter your comment on the idea: {idea.title}</Text>
            <TextInput style={styles.input} placeholder="My new idea" value={value} onChangeText={newValue => setValue(newValue)}></TextInput>
            <Pressable style={styles.addButton} onPress={() => AddComment()}>
                <Text style={styles.addButtonText}>Add new comment</Text>
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

export default AddCommentScreen;