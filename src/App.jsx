import { useState } from "react";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  function handleSwitch() {
    setIsLogin((prev) => !prev);
  }
  return (
    <>
      <Header />
      {isLogin ? (
        <Login onSwitch={handleSwitch} />
      ) : (
        <Signup onSwitch={handleSwitch} />
      )}
    </>
  );
}

export default App;
