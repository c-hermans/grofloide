import AsyncStorage from '@react-native-async-storage/async-storage';

class DataStore {
    constructor() {
        this.ideas = [];
        this.getIdeas();
    }

    async getIdeas() {
        let jsonData = await AsyncStorage.getItem('ideas');
        if (jsonData !== null) {
            this.ideas = JSON.parse(jsonData);
        }
    }

    async setIdeas(ideas) {
        await AsyncStorage.setItem('ideas', JSON.stringify(ideas));
    }

    async clear() { 
        await AsyncStorage.clear();
        this.ideas = [];
        console.log("cleared");
    }

    getAllIdeas() {
        return this.ideas;
    }

    addIdea(idea) {
        this.ideas.push(idea);
        this.setIdeas(this.ideas);
    }

}

export default DataStore;