import { createContext } from "react";

const newContext = createContext([]);

const TestContext = () => {
    console.log(newContext);
    return (
    <div>
        Hello World
    </div>)
}

export default TestContext; 