import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <h1 className="text-white bg-slate-900 text-3xl">
        Welcome to the E-commerce webApplication
      </h1>
    </>
  );
}

export default App;
