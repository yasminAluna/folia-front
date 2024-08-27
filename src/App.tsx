import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './layout/topbar/TopBar';
import Acompanhamento from './pages/Acompanhamento';
import Boleto from './pages/Boleto';
import HomePage from './pages/HomePage';
import NotaFiscal from './pages/NotaFiscal';

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/boleto" element={<Boleto />} />
        <Route path="/nota-fiscal" element={<NotaFiscal />} />
        <Route path="/acompanhamento" element={<Acompanhamento />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
