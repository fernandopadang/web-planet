import { Fragment } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Section } from './style';
import { PNNavbar } from '@web-planet/components';
import { Sanitize } from '@web-planet/helpers';

interface DefaultProps {
  children?: React.ReactNode;
  title?: string;
}

const Page: NextPage<DefaultProps> = (props) => {
  const { children, title } = props;
  const ChildrenView = children || <div>error page</div>;
  const router = useRouter();
  const pageTitle = router.pathname !== "/" ? Sanitize(router.asPath.split("?")[0]) + " | Web Planet" : "Web Planet";

  return (
    <Fragment>
      <head>
        <title key="title">{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="author" content="Web Planet"/>
        <meta httpEquiv="content-language" content="id-id" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="origin" />
      </head>
      <PNNavbar />
      <Section>
        {ChildrenView}
      </Section>
    </Fragment>
  );
};

export default Page;