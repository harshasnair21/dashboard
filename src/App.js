import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
