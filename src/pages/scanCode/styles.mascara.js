import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        //backgroundColor: 'rgba(255,255,255, 0.6)',
        justifyContent: 'center',
    },
    content: {
        height: '40%',
        marginHorizontal: '15%',
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '50%' ,
    },
    headerLeft: {
        height: '60%',
        width: '30%',
        borderLeftColor: 'white',
        borderLeftWidth: 3,
        borderTopColor: 'white',
        borderTopWidth: 3,
    },
    headerRight: {
        height: '60%',
        width: '30%',
        borderRightColor: 'white',
        borderRightWidth: 3,
        borderTopColor: 'white',
        borderTopWidth: 3,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '50%',
    },
    footerLeft: {
        height: '60%',
        width: '30%',
        borderLeftColor: 'white',
        borderLeftWidth: 3,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
    },
    footerRight: {
        height: '60%',
        width: '30%',
        borderRightColor: 'white',
        borderRightWidth: 3,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
    },

})