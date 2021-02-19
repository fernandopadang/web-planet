import { LayoutMaster } from '@web-planet/layout';

const MyApp = (props: any) => {

  const PropsLayout = {
    children: <div>planet list</div>
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