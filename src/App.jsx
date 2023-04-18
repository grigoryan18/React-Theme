import List from "./components/List";
import Header from "./components/Header";
import { useState } from "react";

function App() {

  const [isDark, setIsDark] = useState(false); 

  const handleChangeTheme = () => setIsDark(!isDark); 

  return (
    <div className="App">
      <Header isDark={isDark} handleChangeTheme={handleChangeTheme}/>
      <List isDark={isDark}/>
    </div>
  );
}

export default App;
