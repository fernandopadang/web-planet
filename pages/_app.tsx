

const MyApp = (props: { Component: any, pageProps: any }) =>{
  const { Component, pageProps } = props;
  return <Component {...pageProps} />
}

export default MyApp;