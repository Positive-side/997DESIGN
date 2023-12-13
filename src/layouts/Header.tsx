import Content from '@/layouts/Content';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };

  const goToReviewPage = () => {
    navigate('/review');
  };

  const goToDetailPage = () => {
    navigate('/detail');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-white z-50">
      <Content>
        <div className="w-full h-24 flex flex-row justify-between items-center">
          <div className="w-48 text-5xl cursor-pointer" onClick={goToMainPage}>
            LOGO
          </div>
          <div className="w-500 flex flex-row justify-between items-center ">
            <ul className="w-full flex flex-row justify-evenly items-center ">
              <li className="cursor-pointer" onClick={goToDetailPage}>
                포트폴리오
              </li>
              <li className="cursor-pointer">주문하기</li>
              <li className="cursor-pointer" onClick={goToReviewPage}>
                고객후기
              </li>
              <li className="cursor-pointer">문의하기</li>
            </ul>
            <div className="w-2/5 bg-red-100 flex flex-row justify-center items-center">
              <span>kak</span>
              <span>blo</span>
              <span>ins</span>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Header;
