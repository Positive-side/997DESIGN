import React from 'react';

const Content = (props: { children: React.ReactNode }) => {
  return <div className="m-auto max-w-7xl bg-red-50">{props.children}</div>;
};

export default Content;
