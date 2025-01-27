import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <footer />
    </>
  )
}

export default App
