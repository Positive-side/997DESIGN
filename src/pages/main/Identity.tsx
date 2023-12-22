import styled from 'styled-components';

const Identity = () => {
  return (
    <StIdentityWrapper>
      <h1>IDENTITY</h1>
    </StIdentityWrapper>
  );
};

const StIdentityWrapper = styled.div`
  min-height: 800px;
  padding: 16px 0;

  h1 {
    font-size: 48px;
    line-height: 1;
    margin-bottom: 32px;
  }
`;

export default Identity;
