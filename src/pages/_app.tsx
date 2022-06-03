// export default App;
import { FC } from 'react';
import { PageComponent } from '@/common/types/page';
import { Layout } from '@/common/components/Layout';
import './style.scss';

export const App: FC<{
  Component: PageComponent;
  pageProps: any;
}> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return <div>{getLayout(<Component {...pageProps} />)}</div>;
};

export default App;
