import { useEffect, useState, useCallback,useRef } from "react";
import {
  Layout,
  Input,
  Row,
  Col,
  Button,
  message,
  Select,
  Popover,
} from "antd";
import { selectText ,txt} from "../utils/index";
import { TwitterPicker } from "react-color";

const { Header, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

 function Home({txt}) {
  const [historyTxt,setHistoryTxt] = useState('');
  const [input, setInput] = useState();
  const [colorTheme, setColorTheme] = useState("#00d084");
  const [codeSelect, setCodeSelect] = useState("");
  const workerRef = useRef(null);
  const simplemdeRef = useRef(null);

  useEffect(() => {
      const markedWorker = new Worker('markedWorker.js');

      workerRef.current = markedWorker

      markedWorker.addEventListener('message', function(e) {
        setInput(e.data)
      }, false);
    let simplemde = new SimpleMDE({
      element: document.getElementById("TextArea"),
    });
    simplemdeRef.current = simplemde
  }, []);

  useEffect(()=>{
    let temp =  window.sessionStorage.getItem('txt-md')
      // 初始化数据
    if(temp){
      workerRef.current.postMessage(JSON.stringify({data:temp,colorTheme}))
      simplemdeRef.current.value(temp)
    }else{
      workerRef.current.postMessage(JSON.stringify({data:txt,colorTheme}))
      simplemdeRef.current.value(txt)

    }
  },[])

  useEffect(()=>{
    simplemdeRef.current.codemirror.on("change", () => {
      let val = simplemdeRef.current.value()
      // 每次更改触发
      workerRef.current.postMessage(JSON.stringify({data:val,colorTheme}))
      window.sessionStorage.setItem('txt-md',val)
    });
  },[colorTheme])

  let copyFn = useCallback(() => {
    selectText("edit-wrap");
    document.execCommand("copy");
    message.success("复制完成");
  }, []);

  let themeFn = useCallback((color) => {
    const { hex } = color;
    setColorTheme(hex);
    workerRef.current.postMessage(JSON.stringify({data:'',colorTheme:hex}))
  }, []);

  return (
    <Layout>
      <Header style={{ height: "10vh" }} style={{ background: "#fafafa" }}>
        <h3>在线markdown转换微信公众号文章排版</h3>
      </Header>
      <Content style={{ paddingLeft: 5, paddingRight: 5, background: "#fff" }}>
        <Row>
          <Col span={12}>
            <div>
              <TextArea
                id="TextArea"
                defaultValue={historyTxt}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="btns-wrap">
              {/* <Select
                style={{ width: 150 }}
                placeholder="代码主题"
                onChange={setCodeSelect}
              >
                {codeArr.map((item, idx) => {
                  return (
                    <Option key={idx} value={item}>
                      {item}
                    </Option>
                  );
                })}
              </Select> */}
              <Popover
                trigger="hover"
                content={<TwitterPicker triangle="hide" onChange={themeFn} />}
              >
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                  type="default"
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      background: colorTheme,
                      borderRadius: 3,
                      marginRight: 5,
                    }}
                  ></div>{" "}
                  主题选择
                </Button>
              </Popover>
              <Button onClick={copyFn} type="primary">
                全文复制
              </Button>
            </div>
            <div
              className={`edit-wrap ${codeSelect}`}
              id="edit-wrap"
              style={{ maxWidth: "578px", margin: "auto" }}
              dangerouslySetInnerHTML={{ __html: input  }}
            ></div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export async function  getStaticProps (){

  return {
    props:{
      txt
    }
  }
}

export default Home