import { LayoutMaster } from '@web-planet/layout';
import Components from '@web-planet/component';

const MyApp = (props: any) => {

  const PropsLayout = {
    children: <Components />
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