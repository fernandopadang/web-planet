import { LayoutMaster } from '@web-planet/layouts';
import { PlanetDetailView } from '@web-planet/views';

const MyApp = (props: any) => {

  const PropsLayout = {
    children: <PlanetDetailView />
  };

  return <LayoutMaster {...PropsLayout} />;
};

export default MyApp;