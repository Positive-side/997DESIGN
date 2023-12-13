import React from 'react';

const Content = (props: { children: React.ReactNode }) => {
  return <div className="m-auto px-10 max-w-7xl">{props.children}</div>;
};

export default Content;
