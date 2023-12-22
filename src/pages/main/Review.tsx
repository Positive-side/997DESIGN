import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface StyledProps {
  fontWeight?: string;
  opacityValue?: number;
  buttonNum?: number;
  buttonIndex?: number;
}

const Review = () => {
  const navigate = useNavigate();

  const [start, setStart] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0);
  const [opacity, setOpacity] = useState(100);

  // ✅ 페이지네이션 버튼 클릭 이벤트
  const handleClick = (index: number) => {
    setOpacity(0);
    setSelectedButton(index / 4);

    setTimeout(() => {
      setOpacity(100);
      setStart(index);
    }, 500);
  };

  // ✅ 리뷰 페이지 이동
  const goToReviewPage = () => {
    navigate('/review');
  };

  const cards = [
    { id: 1, consumer: '고객사1' },
    { id: 2, consumer: '고객사2' },
    { id: 3, consumer: '고객사3' },
    { id: 4, consumer: '고객사4' },
    { id: 5, consumer: '고객사5' },
    { id: 6, consumer: '고객사6' },
    { id: 7, consumer: '고객사7' },
    { id: 8, consumer: '고객사8' },
    { id: 9, consumer: '고객사9' },
    { id: 10, consumer: '고객사10' },
    { id: 11, consumer: '고객사11' },
    { id: 12, consumer: '고객사12' },
    { id: 13, consumer: '고객사13' },
    { id: 14, consumer: '고객사14' },
    { id: 15, consumer: '고객사15' },
    { id: 16, consumer: '고객사16' },
  ];

  const groupCount = Math.ceil(cards.length / 4); // 전체 그룹 수 계산

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (selectedButton + 1) % groupCount; // 다음 인덱스 계산
      handleClick(nextIndex * 4); // 해당 인덱스로 이동
    }, 7000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [selectedButton, groupCount]);

  return (
    <StReviewWrapper>
      <h1>REVIEW</h1>
      <StTitle>
        <div>
          <StParagraph fontWeight="300">그리미아트를 이용해주신</StParagraph>
          <StParagraph fontWeight="800">고객님들의 소중한 후기입니다.</StParagraph>
        </div>
        <StButton onClick={goToReviewPage}>REVIEW</StButton>
      </StTitle>
      <StCardWrapper>
        {cards.slice(start, start + 4).map((card, index) => (
          <StCard opacityValue={opacity} key={index}>
            <div>{card.consumer}</div>
            <div>강릉사임당인절미 ★★★★★</div>
            <div>
              기획과 아이디어가 접목된 훌륭한 로고 디자인에 매우 만족했습니다. 저희 브랜드를 잘 표현해주셨고 수정작업이
              번거로우셨을텐데 아주 친절하게 잘 마무리해주셨습니다.
            </div>
          </StCard>
        ))}
      </StCardWrapper>
      <StPagenationWrapper>
        {[...Array(groupCount)].map((_, index) => (
          <StPagenation
            buttonNum={selectedButton}
            buttonIndex={index}
            key={index + 1}
            onClick={() => {
              handleClick(index * 4);
            }}
          />
        ))}
      </StPagenationWrapper>
    </StReviewWrapper>
  );
};

const StReviewWrapper = styled.div`
  min-height: 800px;
  padding: 16px 0;

  h1 {
    font-size: 48px;
    line-height: 1;
    margin-bottom: 32px;
  }
`;

const StTitle = styled.div`
  width: 100%;
  margin-bottom: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const StParagraph = styled.h2<StyledProps>`
  font-size: 30px;
  line-height: 36px;
  margin: 4px 0;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const StButton = styled.div`
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #000;
  margin: 4px 0;
  padding: 4px 32px;
  cursor: pointer;
  color: #000;
  transition-duration: 500ms;

  &:hover {
    background-color: #000;
    color: #fff; /* 호버됐을 때 텍스트 색상 */
  }
`;

const StCardWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StCard = styled.div<StyledProps>`
  width: 22%;
  padding: 12px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-duration: 700ms;
  opacity: ${({ opacityValue }) => opacityValue};

  & > div:first-child {
    width: 91.666667%;
    min-height: 170px;
    --tw-bg-opacity: 1;
    background-color: rgb(191 219 254 / var(--tw-bg-opacity));
  }

  & > div:nth-child(2) {
    width: 91.666667%;
    margin-top: 8px;
  }

  & > div:nth-child(3) {
    width: 91.666667%;
    margin-top: 8px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

const StPagenationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

const StPagenation = styled.div<StyledProps>`
  width: 36px;
  height: 4px;
  margin: 0 4px;
  transition-duration: 700ms;
  background-color: ${({ buttonNum, buttonIndex }) => (buttonNum === buttonIndex ? '#787878' : '#e6e4e4')};
  cursor: pointer;
`;

export default Review;
