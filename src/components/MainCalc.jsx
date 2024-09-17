import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Keyboard from './Keyboard';
import Display from './Display';


export default function MainCalc(){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    return (
        <View style={styles.container}>
          <Display firstNumber={firstNumber} secondNumber={secondNumber} />
          <Keyboard firstNumber={firstNumber} secondNumber={secondNumber} setFirstNumber={setFirstNumber} setSecondNumber={setSecondNumber} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap  : 40
    }
})