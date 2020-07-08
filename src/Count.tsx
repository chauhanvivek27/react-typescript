import React, { useState, useEffect } from 'react';


export default function Example(): JSX.Element {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    useEffect(() => {
        console.log('useEffect');
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });

    return(
    <div>
        <p>Click on Button {count} times</p>
        <p>Button toDos click  {todos[0].text} times</p>
        <button onClick={() => setCount(count + 1)}> Click me </button><br/>
        <button onClick={() => setTodos([{text: 'Learn typescript'}])}> Click ToDo </button>

    </div>
    );
}