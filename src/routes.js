import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from './pages/dashboard';

const AppStack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Home">
                <AppStack.Screen 
                    name="Home" 
                    component={Dashboard} 
                    options={{headerShown: false}}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}