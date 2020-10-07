var Prism = {
  disableWorkerMessageHandler: true,
};
importScripts('marked.js');
importScripts('prismjs/prism.js')

// Prism.plugins.autoloader={
//   languages_path:'path/to/grammars/'
// }

marked.setOptions({
  highlight: (code,type) => {
      try{
         let str =  Prism.highlight(code, Prism.languages[type], type)
           str =  str.replace(/\n([ ]*)/g,($,$1)=>`\n<span>${$1}</span>`)
          str =  str.replace(/(\n)/g,`<br/>`) 

          // str =  `<div style="textAlign:left">` + str.replace(/[\n|\;\n]/g,`</div>$1<div style="textAlign:left">`) +'</div>'
      return str
      }catch(e){
      }
  },
  langPrefix: "code-outer language-",
  // headerPrefix:"language-",
});
// marked( ,{renderer:renderer})

let oldData = ''

const renderer = new marked.Renderer();

self.addEventListener('message', function(e) {
  // console.log(marked)
  let {data,colorTheme} = JSON.parse(e.data)
  if(!data){
    data = oldData
  }else{
    oldData = data
  }
  renderer.heading = function(text, level) {
    return `<h${level} style="color:${colorTheme}"  id="${text}">${text}</h${level}>`;
}; 

  let renderText = marked(data,{renderer:renderer,preClass:true})
  renderText = renderText.replace(/<pre>(.*?)<code.*?class="(.*?)".*?>/g, '<pre  style="display:flex" class="$2">$1<code  class="$2">')
  self.postMessage(renderText);
}, false);