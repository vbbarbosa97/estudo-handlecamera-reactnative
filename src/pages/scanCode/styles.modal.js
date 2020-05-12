import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    content: {
        justifyContent: 'space-between',
        height:'70%',
        backgroundColor: '#fff',
        marginHorizontal: '10%',
        marginTop: '10%',
        padding: 20,
        borderRadius: 9,
    },
    viewIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#4f4f4f',
        fontSize: 16,
        marginTop: 10,
    },

    viewButons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
})