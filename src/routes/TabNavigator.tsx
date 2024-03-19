import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeNavigator from './navigators/HomeNavigator'
import SearchNavigator from './navigators/SearchNavigator'
import LibraryNavigator from './navigators/LibraryNavigator'
import { Home, SearchNormal1, MusicLibrary2 } from 'iconsax-react-native';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Trang chủ') {
                        return <Home size={size} color={focused ? 'green' : 'coral'} />
                    } else if (route.name === 'Tìm kiếm') {
                        return <SearchNormal1 size={size} color={focused ? 'green' : 'coral'} />
                    } else {
                        return <MusicLibrary2 size={size} color={focused ? 'green' : 'coral'} />
                    }
                }
            })}>

                <Tab.Screen name='Trang chủ' component={HomeNavigator} />
                <Tab.Screen name='Tìm kiếm' component={SearchNavigator} />
                <Tab.Screen name='Thư viện' component={LibraryNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator