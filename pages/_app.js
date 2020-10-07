import Head from "next/head";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "simplemde/dist/simplemde.min.css";
import "../styles/css/dumi-style/markdown.less";

import { BackTop } from "antd";

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
  boxShadow: '0px 0px 10px #ccc'
};

// importScripts('prismjs/components/prism-core.min.js')
// importScripts('prismjs/plugins/autoloader/prism-autoloader.js')

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>在线markdown转为微信公众号文章</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="simplemde.min.js"></script>
        <link rel="stylesheet" href="prismjs/themes/prism.css"/>
        <link rel="stylesheet" href="prismjs/plugins/line-numbers/prism.css" data-noprefix />

        {/* <script src="prismjs/plugins/autoloader/prism-autoloader.js"></script> */}
      </Head>   
      <BackTop>
        <div style={style}>顶部</div>
      </BackTop>
      <Component {...pageProps} />
      {/* <script src="prismjs/prism.js"></script> */}
       {/* <script src="prismjs/plugins/autoloader/prism-autoloader.min.js"></script> */}
    </>
  );
}

export default MyApp;
