import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from "react-native"
import { DataContext } from '../App';

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
            <Text style={styles.titleText}>Enter your comment on the idea:</Text>
            <Text style={styles.titleText}>{idea.title}</Text>
            <TextInput style={styles.input} placeholder="My new comment" value={value} onChangeText={newValue => setValue(newValue)}></TextInput>
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
        justifyContent: "center",
        marginTop: -40
    },
    titleText: {
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

export default AddCommentScreen;