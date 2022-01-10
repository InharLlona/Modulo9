
import * as utils from "./utils.js";
import * as DB from "./data-business.js";

 DB.getc().then(data => {
  const nodes = [];
  for(let datas of data.results){
      const node = utils.createCharacterRow(datas)
      console.log(data)
      console.log(datas)
      node.onclick = () =>{
                DB.getcu(datas.id).then(dato => {  
                    utils.showCharacter(datas, datas.episode.length)
                })   
      }
      nodes.push(node);   
  }
  for(let node of nodes){
      document.getElementById("root").append(node);
  }
}
    )


    
 