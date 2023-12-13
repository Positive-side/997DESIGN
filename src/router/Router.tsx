import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';
import DetailPage from '@pages/detail/DetailPage';
import ReviewPage from '@pages/review/ReviewPage';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/review/:id" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
