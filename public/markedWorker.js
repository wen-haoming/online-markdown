importScripts('marked.js');
importScripts('prismjs/prism.js')
// importScripts('prismjs/components/prism-core.min.js')
// importScripts('prismjs/plugins/autoloader/prism-autoloader.js')
// importScripts('prismjs/components/index.js')
// importScripts('prismjs/components.js')
// importScripts('prismjs/dependencies.js')

// loadLanguages(['sql']);



marked.setOptions({
  highlight: (code,type) => {
    return  Prism.highlight(code, Prism.languages.javascript, 'javascript')
  },
  // langPrefix: "hljs lang-",
});
// marked( ,{renderer:renderer})

let oldData = ''

self.addEventListener('message', function(e) {
  // console.log(marked)
  let {data,colorTheme,prismjsFn} = e.data

 

  if(!data){
    data = oldData
  }else{
    oldData = data
  }



  const renderer = new marked.Renderer();

  renderer.heading = function(text, level) {
    return `<h${level} style="color:${colorTheme}"  id="${text}">${text}</h${level}>`;
}; 

  let renderText = marked(data,{renderer:renderer})
  self.postMessage(renderText);
}, false);