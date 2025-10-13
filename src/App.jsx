import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const pushDataLayer = (item) => {
    window.datalayer = window.dataLayer || [];
    window.dataLayer.push(item);
  };

  const increment = () => {
    setCount((state) => state + 1);
    pushDataLayer({ event: "button_click", type: "increment" });
  };

  const decrement = () => {
    if (count === 0) return;
    setCount((state) => state - 1);
    pushDataLayer({ event: "button_click", type: "decrement" });
  };

  return (
    <div>
      <h1>ARL React App</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <p>Count {count}</p>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
