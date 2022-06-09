import { FC } from 'react';
import { Header } from '@/common/components/Header';
import { Side } from '@/common/components/Side';

export const Layout: FC<any> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="header">
        <Header />
      </div>
      <div className="side">
        <Side />
      </div>
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
