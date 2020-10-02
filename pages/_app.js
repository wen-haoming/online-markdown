import Head from 'next/head'
import 'antd/dist/antd.css';
import '../styles/globals.css'
import 'simplemde/dist/simplemde.min.css'
import '../styles/themes/index.less'

function MyApp({ Component, pageProps }) {
  return <> 
    <Head>
        <title>在线markdown转为微信公众号文章</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.bootcdn.net/ajax/libs/simplemde/1.9.0/simplemde.min.js"></script>
              </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
