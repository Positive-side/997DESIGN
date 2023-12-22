import Content from '@/layouts/Content';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    <StHeaderWrapper>
      <Content>
        <StContentWrapper>
          <div onClick={goToMainPage}>LOGO</div>
          <div>
            <ul>
              <li onClick={goToDetailPage}>포트폴리오</li>
              <li>주문하기</li>
              <li onClick={goToReviewPage}>고객후기</li>
              <li>문의하기</li>
            </ul>
            <div>
              <span>kak</span>
              <span>blo</span>
              <span>ins</span>
            </div>
          </div>
        </StContentWrapper>
      </Content>
    </StHeaderWrapper>
  );
};

const StHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;
  background-color: #fff;
  z-index: 50;
`;

const StContentWrapper = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    width: 192px;
    font-size: 48px;
    line-height: 1;
    cursor: pointer;
  }

  & > div:nth-child(2) {
    width: 550px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      li {
        cursor: pointer;
      }
    }

    div {
      width: 40%;
      background-color: yellow;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Header;
