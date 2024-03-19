import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SearchScreen from '../../screens/Search';



const SearchNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchScreen} />
        </HomeStack.Navigator>
    )
}

export default SearchNavigator