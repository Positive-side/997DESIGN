import React from 'react';
import styled from 'styled-components';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <StLayoutWrapper>{props.children}</StLayoutWrapper>
    </div>
  );
};

const StLayoutWrapper = styled.main`
  margin-top: 24px;
  min-height: calc(100vh - 180px);
`;

export default Layout;
