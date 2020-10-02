import { useEffect, useState, useCallback,useMemo } from "react";
import marked from "marked";
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
import hljs from "highlight.js";
import { TwitterPicker } from "react-color";

const { Header, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

let codeArr = [
  "brown-paper",
  "github",
  "dark",
  "a11-dark",
  "a11-light",
  "agate",
  "an-old-hope",
  "androidstudio",
  "arduino-light",
  "arta",
  "ascetic",
  "atelier-cave-dark",
  "atelier-cave-light",
  "atelier-dune-dark",
  "atelier-dune-light",
  "atelier-estuary-dark",
  "atelier-estuary-light",
  "atelier-forest-dark",
  "atelier-forest-light",
  "atelier-heath-dark",
  "atelier-heath-light",
  "atelier-lakeside-dark",
  "atelier-lakeside-light",
  "atelier-plateau-dark",
  "atelier-plateau-light",
  "atelier-savanna-dark",
  "atelier-savanna-light",
  "atelier-seaside-dark",
  "atelier-seaside-light",
  "atelier-sulphurpool-dark",
  "atelier-sulphurpool-light",
  "atom-one-dark",
  "atom-one-light",
];

export default function Home() {
  const [input, setInput] = useState(txt);
  const [colorTheme, setColorTheme] = useState("#00d084");
  const [codeSelect, setCodeSelect] = useState("");
  useEffect(() => {
    marked.setOptions({
      highlight: (code) => hljs.highlightAuto(code).value,
      langPrefix: "hljs lang-",
    });

    var simplemde = new SimpleMDE({
      element: document.getElementById("TextArea"),
      previewRender: function(plainText) {
        return marked(plainText); // Returns HTML from a custom parser
      },
    });

    simplemde.codemirror.on("change", () => {
      setInput(simplemde.value());
    });
  }, []);

  let renderer = useMemo(()=>{
    const renderer = new marked.Renderer();
    renderer.heading = function(text, level) {
        return `<h${level} style="color:${colorTheme}"  id="${text}">${text}</h${level}>`;
    }; 
    return renderer
  },[colorTheme])

  let copyFn = useCallback(() => {
    selectText("edit-wrap");
    document.execCommand("copy");
    message.success("复制完成");
  }, []);

  let themeFn = useCallback((color) => {
    const { hex } = color;
    setColorTheme(hex);
    document.body.setAttribute("style", `--themeColor:${hex}`);
  }, []);

  return (
    <Layout>
      <Header style={{ height: "10vh" }} style={{ background: "#fafafa" }}>
        <p>在线markdown转换微信公众号文章排版</p>
      </Header>
      <Content style={{ paddingLeft: 5, paddingRight: 5, background: "#fff" }}>
        <Row>
          <Col span={12}>
            <div>
              <TextArea
                id="TextArea"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="btns-wrap">
              <Select
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
              </Select>
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
              className={`edit-wrap hljs ${codeSelect}`}
              id="edit-wrap"
              style={{ maxWidth: "578px", margin: "auto" }}
              dangerouslySetInnerHTML={{ __html: marked(input,{renderer:renderer}) }}
            ></div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
