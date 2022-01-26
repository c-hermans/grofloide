import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OverviewScreen = (props) => {
    const ideaStore = props.data;
    return (
        <View style={styles.container}>
            <FlatList data={ideaStore.getAllIdeas()} renderItem={({item }) => <Text style={styles.item}>{item.title}</Text>} />
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