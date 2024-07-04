// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

const Stack = createStackNavigator();

const tales = [
    { id: '1', title: 'Cinderella' },
    { id: '2', title: 'Snow White' },
    { id: '3', title: 'Sleeping Beauty' },
];

const taleDescriptions = {
    '1': {
        title: 'Cinderella',
        description: 'Once upon a time, there was a kind girl named Cinderella...',
        image: 'https://picsum.photos/300/200',
    },
    '2': {
        title: 'Snow White',
        description: 'Snow White is a princess who was loved by all...',
        image: 'https://picsum.photos/300/201',
    },
    '3': {
        title: 'Sleeping Beauty',
        description: 'Sleeping Beauty was a beautiful princess cursed to sleep...',
        image: 'https://picsum.photos/300/202',
    },
};

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select a Fairy Tale</Text>
            <View style={styles.list}>
                {tales.map(tale => (
                    <TouchableOpacity
                        key={tale.id}
                        style={styles.item}
                        onPress={() => navigation.navigate('Tale', { taleId: tale.id })}
                    >
                        <Text style={styles.itemText}>{tale.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const TaleScreen = ({ route }) => {
    const { taleId } = route.params;
    const tale = taleDescriptions[taleId];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{tale.title}</Text>
                <Image source={{ uri: tale.image }} style={styles.image} />
                <Text style={styles.description}>{tale.description}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    list: {
        marginTop: 20,
    },
    item: {
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
    },
    scrollView: {
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    description: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 26,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#333' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fairy Tales' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={{ title: 'Tale' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}