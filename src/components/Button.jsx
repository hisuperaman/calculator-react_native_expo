import { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import ThemeContext from "../context/ThemeContext";

export default function Button({isGray, isBlue, onButtonClick, children}){
    const { theme } = useContext(ThemeContext);

    return (
        <TouchableOpacity onPress={onButtonClick} style={
            isGray ? styles.buttonGray
            : isBlue ? styles.buttonBlue
            : theme=='dark' ? styles.buttonBlack
            : styles.buttonWhite
        }>
            <Text style={
                isGray || isBlue ? styles.textWhite
                : theme=='dark' ? styles.textWhite
                : styles.textBlack
                }>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWhite: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonBlack: {
        backgroundColor: '#202521',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonGray: {
        backgroundColor: '#444553',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonBlue: {
        backgroundColor: '#4053fa',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },

    textWhite: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300'
    },
    textBlack: {
        color: 'black',
        fontSize: 30,
        fontWeight: '300'
    }
})