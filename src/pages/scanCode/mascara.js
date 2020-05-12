import React from 'react';
import { View } from 'react-native';

import { styles } from './styles.mascara';

export function Mascara() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft} />
                    <View style={styles.headerRight}/>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerLeft} />
                    <View style={styles.footerRight} />
                </View>
            </View>
        </View>
    );
}