import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AddButton from './AddButton.js';

const OverviewScreen = ({ navigation, data }) => {
    const ideaStore = data;
    return (
        <View style={styles.container}>
            <View style={styles.ideaContainer}>
                <FlatList data={ideaStore.getAllIdeas()} renderItem={({ item }) =>
                    <Pressable style={styles.pressable} onPress={() => navigation.navigate('IdeaScreen', { idea: item, name: item.title })}>
                        <Text style={styles.item}>{item.title}</Text>
                    </Pressable>
                } />
            </View>
            <AddButton />
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
        backgroundColor: '#9FD356',
        borderRadius: 10
    }
});

export default OverviewScreen;