import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const AddButton = () => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    addButton: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginRight: 16,
        marginBottom: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000080"
    },
    addButtonText: {
        fontWeight: "bold",
        fontSize: 75,
        color: "white"
    }
});

export default AddButton;