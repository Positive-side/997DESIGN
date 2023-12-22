import styled from 'styled-components';

interface StyledProps {
  marginTop?: string;
}

const Banner = () => {
  return (
    <StBannerWrapper>
      <div>
        <StTitle>LOGO DESIGN</StTitle>
        <h1>이유있는 로고제작</h1>
        <StParagraph>고객 한분 한분 정성을 다해</StParagraph>
        <StParagraph>열정을 가지고,</StParagraph>
        <StParagraph>가치를 더하는 디자인을 합니다.</StParagraph>
      </div>
    </StBannerWrapper>
  );
};

const StBannerWrapper = styled.div`
  margin-top: 96px;
  height: 700px;
  position: relative;
  background: linear-gradient(45deg, Violet, Orange);

  div {
    color: #fff;
    position: absolute;
    left: 128px;
    bottom: 128px;

    h1 {
      font-size: 72px;
      font-weight: 700;
      line-height: 1;
      margin-top: 20px;
    }
  }
`;

const StTitle = styled.p`
  font-size: 36px;
  line-height: 15px;
  letter-spacing: 0.1em;
`;

const StParagraph = styled.p<StyledProps>`
  font-size: 30px;
  line-height: 12px;
  font-weight: 300;
  margin-top: ${({ marginTop }) => marginTop};
`;

export default Banner;
