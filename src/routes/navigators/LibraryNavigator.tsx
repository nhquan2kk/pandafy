import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LibraryScreen from '../../screens/Library';



const LibraryNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Library" component={LibraryScreen} />
        </HomeStack.Navigator>
    )
}

export default LibraryNavigator