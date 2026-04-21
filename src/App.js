import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculationPage from "./pages/Calculation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalculationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
