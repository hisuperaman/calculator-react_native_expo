import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { useCallback } from "react";

function Row({children}){
    return (
        <View style={styles.row}>
            {children}
        </View>
    )
}

export default function Keyboard({firstNumber, secondNumber, setFirstNumber, setSecondNumber}){

    const handleNumberClick = useCallback((number)=>{
        if(secondNumber.length < 10){
            setSecondNumber(secondNumber+number);
        }
    })

    function handleOperationClick(operation){

        let newSecondNumber = secondNumber + operation;

        if(firstNumber.length>0){
            if(isNaN(firstNumber[firstNumber.length]-1) && secondNumber.length<1){
                return;
            }

            let theFirstNumber = firstNumber;
            theFirstNumber += secondNumber;
            
            const expression = theFirstNumber;
            let partialResult = eval(expression);

            if(partialResult % 1 !== 0){
                partialResult = partialResult.toFixed(5);
            }

            newSecondNumber = partialResult.toString() + operation;
        }

        setFirstNumber(newSecondNumber)
        setSecondNumber('')
    }

    function handleClearClick(){
        if(secondNumber.length>0){
            setSecondNumber('');
        }
        else{
            setFirstNumber('');
        }
    }

    function handleEqualClick(){
        let newSecondNumber = secondNumber;
        if(firstNumber.length>0){
            let theFirstNumber = firstNumber;

            if(isNaN(newSecondNumber[newSecondNumber.length-1])){
                newSecondNumber = newSecondNumber.slice(0, -1);
            }

            if(isNaN(theFirstNumber[theFirstNumber.length-1]) && newSecondNumber.length<1){
                theFirstNumber = theFirstNumber.slice(0, -1);
            }

            theFirstNumber += newSecondNumber;
            
            const expression = theFirstNumber;
            let partialResult = eval(expression);

            if(partialResult % 1 !== 0){
                partialResult = partialResult.toFixed(5);
            }

            newSecondNumber = partialResult.toString();
        }

        setFirstNumber('')
        setSecondNumber(newSecondNumber)
    }

    function handleBackspaceClick(){
        if(secondNumber.length>0){
            setSecondNumber((prevSecondNumber)=>prevSecondNumber.slice(0, -1))
        }
    }

    function handleToggleSign(){
        if(secondNumber.length>0){
            if(secondNumber[0]=='-'){
                setSecondNumber((prevSecondNumber)=>prevSecondNumber.slice(1))
            }
            else{
                const newSecondNumber = '-'+secondNumber;
                setSecondNumber(newSecondNumber);
            }
        }
    }

    return (
        <View style={styles.container}>

            <Row>
                <Button isGray onButtonClick={handleClearClick}>C</Button>
                <Button isGray onButtonClick={()=>handleToggleSign()}>+/-</Button>
                <Button isGray onButtonClick={()=>handleOperationClick('%')}>%</Button>
                <Button isBlue onButtonClick={()=>handleOperationClick('/')}>{'\u00F7'}</Button>
            </Row>
            <Row>
                <Button onButtonClick={()=>handleNumberClick('7')}>7</Button>
                <Button onButtonClick={()=>handleNumberClick('8')}>8</Button>
                <Button onButtonClick={()=>handleNumberClick('9')}>9</Button>
                <Button isBlue onButtonClick={()=>handleOperationClick('*')}>{'\u00D7'}</Button>
            </Row>
            <Row>
                <Button onButtonClick={()=>handleNumberClick('4')}>4</Button>
                <Button onButtonClick={()=>handleNumberClick('5')}>5</Button>
                <Button onButtonClick={()=>handleNumberClick('6')}>6</Button>
                <Button isBlue onButtonClick={()=>handleOperationClick('-')}>-</Button>
            </Row>
            <Row>
                <Button onButtonClick={()=>handleNumberClick('1')}>1</Button>
                <Button onButtonClick={()=>handleNumberClick('2')}>2</Button>
                <Button onButtonClick={()=>handleNumberClick('3')}>3</Button>
                <Button isBlue onButtonClick={()=>handleOperationClick('+')}>+</Button>
            </Row>
            <Row>
                <Button onButtonClick={()=>handleNumberClick('.')}>.</Button>
                <Button onButtonClick={()=>handleNumberClick('0')}>0</Button>
                <Button onButtonClick={handleBackspaceClick}>{'\u232b'}</Button>
                <Button isBlue onButtonClick={handleEqualClick}>=</Button>
            </Row>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 15
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    }
});