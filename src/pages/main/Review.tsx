import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="h-800 py-4">
      <h1 className="text-5xl mb-8">REVIEW</h1>
      <div className="w-full mb-12 flex flex-row justify-between items-end">
        <div>
          <h2 className="text-3xl my-1 font-light">그리미아트를 이용해주신</h2>
          <h2 className="text-3xl my-1 font-extrabold">고객님들의 소중한 후기입니다.</h2>
        </div>
        <div
          onClick={goToReviewPage}
          className="text-1xl my-1 font-extrabol border border-solid border-black px-8 py-1 cursor-pointer hover:bg-black hover:text-white duration-500"
        >
          REVIEW
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mb-6">
        {cards.slice(start, start + 4).map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center py-3 w-22% h-98 shadow-md duration-700 opacity-${opacity}`}
          >
            <div className="w-11/12 min-h-170 bg-blue-200">{card.consumer}</div>
            <div className="w-11/12 mt-2">강릉사임당인절미 ★★★★★</div>
            <div className="w-11/12 mt-2 ellipsis-line font-light">
              기획과 아이디어가 접목된 훌륭한 로고 디자인에 매우 만족했습니다. 저희 브랜드를 잘 표현해주셨고 수정작업이
              번거로우셨을텐데 아주 친절하게 잘 마무리해주셨습니다.
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center py-4">
        {[...Array(groupCount)].map((_, index) => (
          <div
            className={`w-9 h-1 mx-1 duration-700 bg-gray-${selectedButton == index ? '500' : '200'} cursor-pointer`}
            key={index + 1}
            onClick={() => {
              handleClick(index * 4);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
