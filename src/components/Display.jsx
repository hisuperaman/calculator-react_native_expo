import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import ThemeContext from "../context/ThemeContext";

export default function Display({firstNumber, secondNumber}) {
    const { theme } = useContext(ThemeContext);

    const color = theme == 'dark' ? 'white' : 'black';

    firstNumber = firstNumber.replace('/', '\u00F7').replace('*', '\u00D7')

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, fontWeight: 100, color: color }}>
                {firstNumber}
            </Text>
            <Text style={{ fontSize: 40, fontWeight: 200, color: color }}>
                {secondNumber}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
})