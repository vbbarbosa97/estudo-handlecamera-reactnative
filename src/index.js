import React from 'react';
import { Provider } from 'react-native-paper';
import { Routes } from './routes';

export function App() {
    return (
        <Provider>
            <Routes />
        </Provider>
    );
}