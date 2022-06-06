import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>

        <img src={logo} className="App-logo" alt="logo" />

      </header>
      
    </div>
  );
}

function HomePage(){
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

function DashboardPage(){
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}

export default App;
