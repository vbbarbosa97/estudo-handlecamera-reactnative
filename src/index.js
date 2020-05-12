import React from 'react';
import { Provider, Portal } from 'react-native-paper';
import { Routes } from './routes';

export function App() {
    return (
        <Provider>
            <Portal>
                <Routes />
            </Portal>
        </Provider>
    );
}