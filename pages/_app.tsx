import Provider from '@web-planet/stores';
import '../public/css/app.css'

const MyApp = (props: { Component: any, pageProps: any }) =>{
  const { Component, pageProps } = props;
  return <Provider><Component {...pageProps} /></Provider>
}

export default MyApp