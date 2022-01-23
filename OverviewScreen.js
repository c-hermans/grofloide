import React, { useContext } from 'react';
import { View, Text } from 'react-native';

const OverviewScreen = (props) => {
    const ideaStore = props.data;
    return (
        <View>
            <Text>Overview of all my ideas</Text>
            <Text>{ideaStore.getAllIdeas()[0].title}</Text>
        </View>
    );
}

export default OverviewScreen;