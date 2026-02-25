import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Taskmaster from "./pages/todo";
import ConnectHub from "./pages/Contacts";
import MoneyFlow from "./pages/Finance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/Taskmaster" element={<Taskmaster />} />
        <Route path="/contacts/ConnectHub" element={<ConnectHub />} />
        <Route path="/projetos/moneyflow" element={<MoneyFlow />} />
      </Routes>
    </Router>
  );
}

export default App;