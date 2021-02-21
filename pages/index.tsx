import { LayoutMaster } from '@web-planet/layout';
import { PlanetListView } from '@web-planet/views';

const MyApp = (props: any) => {

  const PropsLayout = {
    children: <PlanetListView />
  };

  return <LayoutMaster {...PropsLayout} />;
};

MyApp.getInitialProps = async (props : { query: any, req: any }) => {
  const { req } = props;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return {
    userAgent
  }
};

export default MyApp;