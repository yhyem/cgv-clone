import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import MoviesDetail from './pages/MovieDetail';
import Ticketing from './pages/Ticketing';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetail />} />
        <Route path="/ticket" element={<Ticketing />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
