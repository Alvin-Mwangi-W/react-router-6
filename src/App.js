import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<h2>Hello Alvin</h2>}></Route>
      <Route path="testing" element={
        <div>
          <h2>Hello</h2>
          <h3>Testing</h3>
        </div>
      }></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
