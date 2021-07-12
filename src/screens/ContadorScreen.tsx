import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const ContadorScreen = () => {


    const [contador, setContador] = useState(10)


    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',

        }}>
            <Text style={{
                fontSize: 45,
                textAlign: 'center',
                top:-15
            }}>Contador: {contador  }</Text>

            <Button
                title='Click'
                onPress={() => setContador(contador + 1)}
            
            />

        </View>
    )
}

export default ContadorScreen
