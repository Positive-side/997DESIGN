import React from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="pt-20 bg-blue-50">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
