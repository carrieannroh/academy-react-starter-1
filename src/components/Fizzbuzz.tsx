import { useState } from "react";

export default function Fizzbuzz(): JSX.Element {

const [numberFromCurrentRender, setNewNumber] = useState<number>(1);
const [previousNumber, setPreviousNumber] = useState<number[]>([]);
const [fizz, setFizz] = useState<string>("")

const handleIncreaseByOne = () => {
    setNewNumber(numberFromCurrentRender + 1)
    handleStoreNumber();
}

const handleStoreNumber = () => {
    setPreviousNumber((previousStoredValues:any) => [...previousStoredValues, numberFromCurrentRender]); 
}

const handleReset = () => {
    setNewNumber(1);
    setPreviousNumber([])
  }

// const handleFizz = () => {
//     // if (numberFromCurrentRender %3 === 0) {
//     //     console.log("fizz")
//      setFizz(fizz + "fizz")

//    }

return (
    <>
    <h1>FizzBuzz</h1>
    <p>Number: {numberFromCurrentRender}</p>
    <p>Your stored Number: {previousNumber}</p>
    <button onClick={handleIncreaseByOne}>Next</button>
    <button onClick={handleReset}>Reset counter</button>

    {/* <button onClick={handleStoreNumber}>Store</button> */}
   
    </>
);

}