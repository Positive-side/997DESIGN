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
        <StParagraph marginTop="32px">고객 한분 한분 정성을 다해</StParagraph>
        <StParagraph marginTop="4px">열정을 가지고,</StParagraph>
        <StParagraph marginTop="4px">가치를 더하는 디자인을 합니다.</StParagraph>
      </div>
    </StBannerWrapper>
  );
};

const StBannerWrapper = styled.div`
  margin-top: 96px;
  height: 700px;
  position: relative;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #8b5cf6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(139 92 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #d946ef var(--tw-gradient-to-position);

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
  line-height: 40px;
  letter-spacing: 0.1em;
`;

const StParagraph = styled.p<StyledProps>`
  font-size: 30px;
  line-height: 36px;
  font-weight: 300;
  margin-top: ${({ marginTop }) => marginTop || '1rem'};
`;

export default Banner;
