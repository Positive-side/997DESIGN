import Content from '@/layouts/Content';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StFooterWrapper>
      <Content>
        <div>footer</div>
      </Content>
    </StFooterWrapper>
  );
};

const StFooterWrapper = styled.div`
  width: 100%;
  height: 208px;
  background-color: #ffaebb;
`;

export default Footer;
