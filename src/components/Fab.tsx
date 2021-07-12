import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,  TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl'
    onPress: () => void;
}




const Fab = ({ title, onPress, position = 'br' }: Props) => {


    return (

        <View  style={
            (position === 'bl') ? (styles.fabLocationBL) : (styles.fabLocationBR)
        }>
        <TouchableNativeFeedback
            background={ TouchableNativeFeedback.Ripple('#28425B', false, 30)}
            onPress={onPress}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25,

    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },

    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default Fab
