import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const OverviewScreen = ({ navigation, data }) => {
    const ideaStore = data;
    return (
        <View style={styles.container}>
            <FlatList data={ideaStore.getAllIdeas()} renderItem={({ item }) =>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('IdeaScreen', { idea: item, name: item.title })}>
                    <Text style={styles.item}>{item.title}</Text>
                </Pressable>
            } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#54595f'
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