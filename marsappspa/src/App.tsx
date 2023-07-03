import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {CounterProps} from "./types";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";

export const CounterContext = createContext<CounterProps | null>(null);

function App() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (counter: number) => {
      setCounter(counter + 1);
      localStorage.setItem("counter", (counter + 1).toString());
  }

  useEffect(() => {
      const storedCounter: number = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
      setCounter(storedCounter);
  }, []);

  return (
      <CounterContext.Provider value={{counter, updateCounter}}>
          <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/iod" element={<SecondPage/>}/>
                </Routes>
            </div>
          </BrowserRouter>
      </CounterContext.Provider>
  );
}

export default App;
