import React from 'react';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="mt-24">{props.children}</main>
    </div>
  );
};

export default Layout;
