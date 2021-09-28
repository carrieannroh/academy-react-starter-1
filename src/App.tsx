import { greet } from "./utils/greet";
import Fizzbuzz from "./components/Fizzbuzz";


function App(): JSX.Element {
  return (
    <>
     <h1>{greet("World")}</h1>;
     <Fizzbuzz /> 
    </>
  )
}

export default App;
