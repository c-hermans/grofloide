import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const OverviewScreen = ({navigation, data}) => {
    const ideaStore = data;
    return (
        <View style={styles.container}>
            <FlatList data={ideaStore.getAllIdeas()} renderItem={({ item }) =>
                <Pressable onPress={() => navigation.navigate('IdeaScreen', {title: item.title})}>
                    <Text style={styles.item}>{item.title}</Text>
                </Pressable>
            } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        alignItems: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'red'
    },
});

export default OverviewScreen;