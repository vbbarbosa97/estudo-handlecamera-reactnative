import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Photography} from './pages/photography';
import {Recording} from './pages/recording';
import {ScanCode} from './pages/scanCode';

const Tab = createMaterialBottomTabNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Foto"
                shifting={true}
                sceneAnimationEnabled={false}
            >
                <Tab.Screen 
                    name="Vídeo"
                    component={Recording}
                    options={{
                        tabBarIcon: 'camcorder-box',
                        tabBarColor: 'red'
                    }}
                />
                <Tab.Screen 
                    name="Foto"
                    component={Photography}
                    options={{
                        tabBarIcon: 'camera',
                        tabBarColor: 'blue',
                    }}
                />
                <Tab.Screen 
                    name="QRCode"
                    component={ScanCode}
                    options={{
                        tabBarIcon: 'qrcode-scan',
                        tabBarColor: 'green'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}